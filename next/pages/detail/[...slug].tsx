import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import DetailPage from '../../components/pages/DetailPage'
import { ContentPageBySlugQuery } from '../../graphql'
import { client } from '../../utils/gql'
import { hasAttributes, isDefined, withAttributes } from '../../utils/isDefined'

interface DetailProps {
  contentPage: ContentPageBySlugQuery['contentPageBySlug']
  contact: ContentPageBySlugQuery['contact']
}

const Detail = ({ contentPage, contact }: DetailProps) => {
  const contentPageWithAttributes = withAttributes(contentPage?.data)

  if (!contentPage || !contentPageWithAttributes) {
    return null
  }

  return <DetailPage contentPage={contentPageWithAttributes} contactInfo={withAttributes(contact?.data)} />
}

export const getStaticProps: GetStaticProps<DetailProps> = async ({ params, locale = 'sk' }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const slug = (typeof params.slug === 'string' ? params.slug : params.slug?.join('/')) ?? ''

  const [{ contentPageBySlug: contentPage, contact }, translations] = await Promise.all([
    client.ContentPageBySlug({ slug, locale }),
    serverSideTranslations(locale, ['common']),
  ])

  if (!contentPage) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      contentPage,
      contact,
      ...translations,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales = [] }) => {
  /** Get all content pages for each locale. It would be better to fetch all content pages in one query, but I didn't find a way */
  const contentPageSlugsPromises = locales.map((locale) => client.AllContentPageSlugs({ locale }))
  const contentPageSlugsResponses = await Promise.all(contentPageSlugsPromises)

  /** We have a quite complicated and nested structure here, so we need to flatten the response and filter out nullables */
  const allContentPages = contentPageSlugsResponses
    .flat()
    .map((contentPageSlugsResponse) => contentPageSlugsResponse.contentPages?.data.filter(hasAttributes))
    .filter(isDefined)
    .flat()

  const paths = allContentPages.map((contentPage) => {
    return {
      params: {
        slug: [contentPage.attributes.slug],
      },
      locale: contentPage.attributes.locale ?? undefined,
    }
  })

  return {
    paths,
    /** This means that in case that we didn't generate the detail page in build time, the page will be generated on requests (same as SSG). */
    fallback: 'blocking',
  }
}

export default Detail
