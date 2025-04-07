import { GetStaticProps } from 'next'
import Script from 'next/script'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from '@/src/components/pages/Page'
import { GeneralQuery, NewsQuery, VisitUsPageQuery } from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { hasAttributes } from '@/src/utils/isDefined'
import { getRouteForLocale } from '@/src/utils/localeRoutes'

interface VisitUsProps {
  generalQuery: GeneralQuery
  visitUsPage: VisitUsPageQuery['visitUsPage']
  news: NewsQuery['news']
  tickets: VisitUsPageQuery['tickets']
}

const VisitUs = ({ generalQuery, visitUsPage, news, tickets }: VisitUsProps) => {
  const { t } = useTranslation()

  if (!visitUsPage) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      {/* Load GoOut script to be able to show purchase form */}
      <Script src="https://partners.goout.net/sk-bratislava/gmbsk.js" />

      <Page
        page={visitUsPage}
        title={t('navigation.visitUs')}
        newsItems={news?.data.filter(hasAttributes)}
        tickets={tickets?.data.filter(hasAttributes)}
      />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<VisitUsProps> = async ({ locale = 'sk' }) => {
  const [generalQuery, { visitUsPage, tickets }, { news }, translations] = await Promise.all([
    client.General({ locale }),
    client.VisitUsPage({ locale }),
    client.News({ locale, tag: getRouteForLocale('aktuality', locale) }),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      generalQuery,
      visitUsPage,
      news,
      tickets,
      ...translations,
    },
    revalidate: 10,
  }
}

export default VisitUs
