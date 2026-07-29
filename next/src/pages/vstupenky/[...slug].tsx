import { GetStaticProps } from 'next'
import Script from 'next/script'
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations'

import TicketPage from '@/src/components/pages/TicketPage'
import {
  ContentPageBySlugQuery,
  ExhibitionsByPlaceQuery,
  GeneralQuery,
} from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { NOT_FOUND } from '@/src/utils/consts'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { getTodaysDate } from '@/src/utils/getTodaysDate'
import { isDefined } from '@/src/utils/isDefined'
import { getRouteForLocale } from '@/src/utils/localeRoutes'

interface TicketProps {
  generalQuery: GeneralQuery
  contentPages: ContentPageBySlugQuery['contentPages']
  currentEvents?: ExhibitionsByPlaceQuery['currentEvents']
}

const Tickets = ({ generalQuery, contentPages, currentEvents }: TicketProps) => {
  const contentPage = contentPages[0]
  if (!contentPage) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      {/* Load GoOut script to be able to show purchase form */}
      <Script src="https://partners.goout.net/sk-bratislava/gmbsk.js" />

      <TicketPage contentPage={contentPage} currentEvents={currentEvents?.filter(isDefined)} />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<TicketProps> = async ({ params, locale = 'sk' }) => {
  if (!params) {
    return NOT_FOUND
  }
  const slug = (typeof params.slug === 'string' ? params.slug : params.slug?.join('/')) ?? ''

  const today = getTodaysDate()

  const [generalQuery, { contentPages }, translations] = await Promise.all([
    client.General({ locale }),
    client.ContentPageBySlug({
      slug,
      locale,
    }),
    serverSideTranslations(locale),
  ])

  const contentPage = contentPages[0]
  if (!contentPage) {
    return NOT_FOUND
  }

  if (!contentPage.place?.slug) {
    return {
      props: {
        generalQuery,
        contentPages,
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
    place: contentPage.place.slug,
  })

  return {
    props: {
      generalQuery,
      contentPages,
      currentEvents,
      ...translations,
    },
    revalidate: 10,
  }
}

/** This is a kind of hack, but getStaticPaths is exactly the same as for the detail, so here we just reexport it from that page */
export { getStaticPaths } from '@/src/pages/detail/[...slug]'

export default Tickets
