import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import TicketPage from '../../components/pages/TicketPage'
import { ContentPageBySlugQuery, ExhibitionsByPlaceQuery, GeneralQuery } from '../../graphql'
import { GeneralContextProvider } from '../../utils/generalContext'
import { getTodaysDate } from '../../utils/getTodaysDate'
import { client } from '../../utils/gql'
import { hasAttributes, withAttributes } from '../../utils/isDefined'
import { getRouteForLocale } from '../../utils/localeRoutes'

interface TicketProps {
  generalQuery: GeneralQuery
  contentPage: ContentPageBySlugQuery['contentPageBySlug']
  currentEvents?: ExhibitionsByPlaceQuery['currentEvents']
}

const Tickets = ({ generalQuery, contentPage, currentEvents }: TicketProps) => {
  const contentPageWithAttributes = withAttributes(contentPage?.data)

  if (!contentPage || !contentPageWithAttributes) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      <TicketPage contentPage={contentPageWithAttributes} currentEvents={currentEvents?.data.filter(hasAttributes)} />
    </GeneralContextProvider>
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

  const [generalQuery, { contentPageBySlug: contentPage }, translations] = await Promise.all([
    client.General({ locale }),
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
        generalQuery,
        contentPage,
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
      generalQuery,
      contentPage,
      currentEvents,
      ...translations,
    },
    revalidate: 10,
  }
}

/** This is a kind of hack, but getStaticPaths is exactly the same as for the detail, so here we just reexport it from that page */
export { getStaticPaths } from '../detail/[...slug]'

export default Tickets
