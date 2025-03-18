import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from '@/src/components/pages/Page'
import { GeneralQuery, GetInvolvedPageQuery, NewsQuery } from '@/src/services/graphql'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { client } from '@/src/utils/gql'
import { hasAttributes } from '@/src/utils/isDefined'

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
    serverSideTranslations(locale),
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
