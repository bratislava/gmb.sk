import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ErrorPage from '../components/pages/ErrorPage'
import { GeneralQuery } from '../graphql'
import { GeneralContextProvider } from '../utils/generalContext'
import { client } from '../utils/gql'

interface ErrorProps {
  generalQuery: GeneralQuery
}

const Custom404: NextPage<ErrorProps> = ({ generalQuery }: ErrorProps) => {
  return (
    <GeneralContextProvider general={generalQuery}>
      <ErrorPage statusCode={404} />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<ErrorProps> = async ({ locale = 'sk' }) => {
  const [generalQuery, translations] = await Promise.all([
    client.General({ locale }),
    serverSideTranslations(locale, ['common']),
  ])
  return {
    props: {
      generalQuery,
      ...translations,
    },
    revalidate: 10,
  }
}

export default Custom404
