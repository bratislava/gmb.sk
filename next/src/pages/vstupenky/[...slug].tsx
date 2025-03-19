import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import TicketPage from '@/src/components/pages/TicketPage'
import {
  ContentPageBySlugQuery,
  ExhibitionsByPlaceQuery,
  GeneralQuery,
} from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { getTodaysDate } from '@/src/utils/getTodaysDate'
import { hasAttributes, withAttributes } from '@/src/utils/isDefined'
import { getRouteForLocale } from '@/src/utils/localeRoutes'

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
      <TicketPage
        contentPage={contentPageWithAttributes}
        currentEvents={currentEvents?.data.filter(hasAttributes)}
      />
    </GeneralContextProvider>
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

  const [generalQuery, { contentPageBySlug: contentPage }, translations] = await Promise.all([
    client.General({ locale }),
    client.ContentPageBySlug({
      slug,
      locale,
      isPublished: true,
    }),
    serverSideTranslations(locale),
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
export { getStaticPaths } from '@/src/pages/detail/[...slug]'

export default Tickets
