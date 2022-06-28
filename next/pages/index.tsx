import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from '../components/pages/Page'
import { HomePageQuery, NewsQuery } from '../graphql'
import { client } from '../utils/gql'
import { hasAttributes, withAttributes } from '../utils/isDefined'
import { ssrTranslations } from '../utils/translations'

interface IndexProps {
  homePage: HomePageQuery['homePage']
  contact: HomePageQuery['contact']
  news: NewsQuery['news']
}
export const Index = ({ homePage, contact, news }: IndexProps) => {
  const { t, i18n } = useTranslation()

  return (
    <Page
      page={homePage}
      title={
        i18n.language === 'sk'
          ? `${t('common.cityGallery')} ${t('common.bratislavaGenitiv')}`
          : `${t('common.bratislavaGenitiv')} ${t('common.cityGallery')}`
      }
      contactInfo={withAttributes(contact?.data)}
      newsItems={news?.data?.filter(hasAttributes)}
    />
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async ({ locale = 'sk' }) => {
  const [{ homePage, contact }, { news }, translations] = await Promise.all([
    client.HomePage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      homePage,
      contact,
      news,
      ...translations,
    },
    revalidate: 60,
  }
}

export default Index
