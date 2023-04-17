import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from '../components/pages/Page'
import { CollectionPageQuery, GeneralQuery, NewsQuery } from '../graphql'
import { GeneralContextProvider } from '../utils/generalContext'
import { client } from '../utils/gql'
import { hasAttributes } from '../utils/isDefined'

interface CollectionProps {
  generalQuery: GeneralQuery
  collectionsPage: CollectionPageQuery['collectionsPage']
  news: NewsQuery['news']
}

export const Collection = ({ generalQuery, collectionsPage, news }: CollectionProps) => {
  const { t } = useTranslation()

  if (!collectionsPage) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      <Page page={collectionsPage} title={t('navigation.collections')} newsItems={news?.data.filter(hasAttributes)} />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<CollectionProps> = async ({ locale = 'sk' }) => {
  const [generalQuery, { collectionsPage }, { news }, translations] = await Promise.all([
    client.General({ locale }),
    client.CollectionPage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      generalQuery,
      collectionsPage,
      news,
      ...translations,
    },
    revalidate: 10,
  }
}

export default Collection
