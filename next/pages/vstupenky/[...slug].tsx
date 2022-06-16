import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import TicketPage from '../../components/pages/TicketPage'
import { ExhibitionsByPlaceQuery, TicketPageBySlugQuery } from '../../graphql'
import { getTodaysDate } from '../../utils/getTodaysDate'
import { client } from '../../utils/gql'
import { hasAttributes, isDefined, withAttributes } from '../../utils/isDefined'
import { getRouteForLocale } from '../../utils/localeRoutes'
import { ssrTranslations } from '../../utils/translations'

interface TicketProps {
  contentPage: TicketPageBySlugQuery['contentPageBySlug']
  contact: TicketPageBySlugQuery['contact']
  currentEvents?: ExhibitionsByPlaceQuery['currentEvents']
}

const Tickets = ({ contentPage, contact, currentEvents }: TicketProps) => {
  const contentPageWithAttributes = withAttributes(contentPage?.data)

  if (!contentPage || !contentPageWithAttributes) {
    return null
  }

  return (
    <TicketPage
      contentPage={contentPageWithAttributes}
      contactInfo={withAttributes(contact?.data)}
      currentEvents={currentEvents?.data.filter(hasAttributes)}
    />
  )
}

export const getStaticProps: GetStaticProps<TicketProps> = async ({ params, locale = 'sk' }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const slug = (typeof params.slug === 'string' ? params.slug : params.slug?.join('/')) ?? ''

  const today = getTodaysDate()

  const [{ contentPageBySlug: contentPage, contact }, translations] = await Promise.all([
    client.TicketPageBySlug({
      slug: slug,
      locale: locale,
    }),
    ssrTranslations({ locale }, ['common']),
  ])

  if (!contentPage) {
    return {
      notFound: true,
    }
  }

  if (!contentPage?.data?.attributes?.place?.data?.attributes?.slug) {
    return {
      props: {
        contentPage,
        contact,
        ...translations,
      },
    }
  }

  const { currentEvents } = await client.ExhibitionsByPlace({
    locale: locale,
    slug: slug,
    today,
    tagExhibitions: getRouteForLocale('vystavy', locale),
    tagPermanentExhibitions: getRouteForLocale('stale-expozicie', locale),
    place: contentPage.data?.attributes?.place?.data?.attributes?.slug,
  })

  return {
    props: {
      contentPage,
      contact,
      currentEvents,
      ...translations,
    },
    revalidate: 60,
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

export default Tickets
