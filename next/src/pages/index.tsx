import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HomePage from '@/src/components/pages/HomePage'
import { GeneralQuery, HomePageQuery, NewsQuery } from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { hasAttributes } from '@/src/utils/isDefined'

interface IndexProps {
  generalQuery: GeneralQuery
  homePage: HomePageQuery['homePage']
  news: NewsQuery['news']
}

export const Index = ({ homePage, generalQuery, news }: IndexProps) => {
  const { t } = useTranslation()

  return (
    <GeneralContextProvider general={generalQuery}>
      <HomePage
        page={homePage}
        title={t('common.home')}
        newsItems={news?.data?.filter(hasAttributes)}
      />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async ({ locale = 'sk' }) => {
  const [generalQuery, { homePage }, { news }, translations] = await Promise.all([
    client.General({ locale }),
    client.HomePage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      generalQuery,
      homePage,
      news,
      ...translations,
    },
    revalidate: 10,
  }
}

export default Index
