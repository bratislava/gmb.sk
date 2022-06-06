import { GetServerSideProps } from 'next'
import React from 'react'
import TicketPage from '../../components/pages/TicketPage'
import { ExhibitionsByPlaceQuery, TicketPageBySlugQuery } from '../../graphql'
import { getTodaysDate } from '../../utils/getTodaysDate'
import { client } from '../../utils/gql'
import { hasAttributes, withAttributes } from '../../utils/isDefined'
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

export const getServerSideProps: GetServerSideProps<TicketProps> = async ({ query, locale = 'sk' }) => {
  const slug = (typeof query.slug === 'string' ? query.slug : query.slug?.join('/')) ?? ''

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
  }
}

export default Tickets
