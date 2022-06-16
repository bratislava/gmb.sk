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

/** This is a kind of a hack, but getStaticPaths is exactly the same as for the detail, so here we just reexport it from that page */
export { getStaticPaths } from '../detail/[...slug]'

export default Tickets
