import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from '../components/pages/Page'
import { GeneralQuery, GetInvolvedPageQuery, NewsQuery } from '../graphql'
import { GeneralContextProvider } from '../utils/generalContext'
import { client } from '../utils/gql'
import { hasAttributes } from '../utils/isDefined'

interface GetInvolvedProps {
  generalQuery: GeneralQuery
  getInvolvedPage: GetInvolvedPageQuery['getInvolvedPage']
  news: NewsQuery['news']
}

const GetInvolved = ({ generalQuery, getInvolvedPage, news }: GetInvolvedProps) => {
  const { t } = useTranslation()

  if (!getInvolvedPage) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      <Page
        page={getInvolvedPage}
        title={t('navigation.getInvolved')}
        newsItems={news?.data.filter(hasAttributes)}
      />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<GetInvolvedProps> = async ({ locale = 'sk' }) => {
  const [generalQuery, { getInvolvedPage }, { news }, translations] = await Promise.all([
    client.General({ locale }),
    client.GetInvolvedPage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      generalQuery,
      getInvolvedPage,
      news,
      ...translations,
    },
    revalidate: 10,
  }
}

export default GetInvolved
