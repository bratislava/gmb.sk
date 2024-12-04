import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from '@/components/pages/Page'
import { GeneralQuery, HomePageQuery, NewsQuery } from '@/graphql'
import { GeneralContextProvider } from '@/utils/generalContext'
import { client } from '@/utils/gql'
import { hasAttributes } from '@/utils/isDefined'

interface IndexProps {
  generalQuery: GeneralQuery
  homePage: HomePageQuery['homePage']
  news: NewsQuery['news']
}

export const Index = ({ homePage, generalQuery, news }: IndexProps) => {
  const { t, i18n } = useTranslation()

  return (
    <GeneralContextProvider general={generalQuery}>
      <Page
        page={homePage}
        title={
          i18n.language === 'sk'
            ? `${t('common.cityGallery')} ${t('common.bratislavaGenitiv')}`
            : `${t('common.bratislavaGenitiv')} ${t('common.cityGallery')}`
        }
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
    serverSideTranslations(locale, ['common']),
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
