import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import React from 'react'
import DetailPage from '../../components/pages/DetailPage'
import { ContentPageBySlugQuery } from '../../graphql'
import { client } from '../../utils/gql'
import { hasAttributes, isDefined, withAttributes } from '../../utils/isDefined'
import { ssrTranslations } from '../../utils/translations'

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

export const getStaticProps: GetStaticProps<DetailProps> = async ({ params, locale }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const slug = (typeof params.slug === 'string' ? params.slug : params.slug?.join('/')) ?? ''

  const [{ contentPageBySlug: contentPage, contact }, translations] = await Promise.all([
    client.ContentPageBySlug({ slug, locale }),
    ssrTranslations({ locale }, ['common']),
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
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  // // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // // Get the paths we want to pre-render based on posts
  // const paths = posts.map((post) => ({
  //   params: { id: post.id },
  // }))

  const promises = locales?.map((locale) => client.AllContentPageSlugs({ locale })) ?? []

  const responses = await Promise.all(promises)

  const paths = responses.reduce((acc, currentValue) => {
    const { contentPages } = currentValue
    const paths = contentPages!.data.filter(hasAttributes).map((contentPage) => {
      console.log('🚀 ~ file: [...slug].tsx ~ line 71 ~ paths ~ contentPage', contentPage)
      return {
        params: {
          slug: [contentPage.attributes.slug],
        },
        locale: contentPage.attributes.locale ?? undefined,
      }
    })

    return acc.concat(paths)
  }, [] as GetStaticPathsResult['paths'])

  // if (!contentPages) {
  //   return { paths: [], fallback: 'blocking' }
  // }

  return { paths, fallback: true }
}

export default Detail
