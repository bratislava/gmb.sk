import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DetailPage from '@/src/components/pages/DetailPage'
import { ContentPageBySlugQuery, GeneralQuery } from '@/src/services/graphql'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { client } from '@/src/utils/gql'
import { hasAttributes, isDefined, withAttributes } from '@/src/utils/isDefined'

interface DetailProps {
  generalQuery: GeneralQuery
  contentPage: ContentPageBySlugQuery['contentPageBySlug']
}

const Detail = ({ generalQuery, contentPage }: DetailProps) => {
  const contentPageWithAttributes = withAttributes(contentPage?.data)

  if (!contentPage || !contentPageWithAttributes) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      <DetailPage contentPage={contentPageWithAttributes} />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<DetailProps> = async ({
  params,
  locale = 'sk',
  preview,
}) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const slug = (typeof params.slug === 'string' ? params.slug : params.slug?.join('/')) ?? ''

  const [generalQuery, { contentPageBySlug: contentPage }, translations] = await Promise.all([
    client.General({ locale }),
    client.ContentPageBySlug({ slug, locale, isPublished: !preview }),
    serverSideTranslations(locale),
  ])

  if (!contentPage) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      generalQuery,
      contentPage,
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
    .map((contentPageSlugsResponse) =>
      contentPageSlugsResponse.contentPages?.data.filter(hasAttributes)
    )
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
