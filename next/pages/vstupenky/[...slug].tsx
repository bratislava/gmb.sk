import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import TicketPage from '../../components/pages/TicketPage'
import { ContentPageBySlugQuery, ExhibitionsByPlaceQuery } from '../../graphql'
import { getTodaysDate } from '../../utils/getTodaysDate'
import { client } from '../../utils/gql'
import { hasAttributes, withAttributes } from '../../utils/isDefined'
import { getRouteForLocale } from '../../utils/localeRoutes'

interface TicketProps {
  contentPage: ContentPageBySlugQuery['contentPageBySlug']
  general: ContentPageBySlugQuery['general']
  currentEvents?: ExhibitionsByPlaceQuery['currentEvents']
}

const Tickets = ({ contentPage, general, currentEvents }: TicketProps) => {
  const contentPageWithAttributes = withAttributes(contentPage?.data)

  if (!contentPage || !contentPageWithAttributes) {
    return null
  }

  return (
    <TicketPage
      contentPage={contentPageWithAttributes}
      contactInfo={withAttributes(general?.data)}
      currentEvents={currentEvents?.data.filter(hasAttributes)}
    />
  )
}

export const getStaticProps: GetStaticProps<TicketProps> = async ({ params, locale = 'sk', preview }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const slug = (typeof params.slug === 'string' ? params.slug : params.slug?.join('/')) ?? ''

  const today = getTodaysDate()

  const [{ contentPageBySlug: contentPage, general }, translations] = await Promise.all([
    client.ContentPageBySlug({
      slug,
      locale,
      isPublished: !preview,
    }),
    serverSideTranslations(locale, ['common']),
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
        general,
        ...translations,
      },
    }
  }

  const { currentEvents } = await client.ExhibitionsByPlace({
    locale,
    slug,
    today,
    tagExhibitions: getRouteForLocale('vystavy', locale),
    tagPermanentExhibitions: getRouteForLocale('stale-expozicie', locale),
    place: contentPage.data?.attributes?.place?.data?.attributes?.slug,
  })

  return {
    props: {
      contentPage,
      general,
      currentEvents,
      ...translations,
    },
    revalidate: 10,
  }
}

/** This is a kind of a hack, but getStaticPaths is exactly the same as for the detail, so here we just reexport it from that page */
export { getStaticPaths } from '../detail/[...slug]'

export default Tickets
