import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ErrorPage from '@/src/components/pages/ErrorPage'
import { GeneralQuery } from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { GeneralContextProvider } from '@/src/utils/generalContext'

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
    serverSideTranslations(locale),
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
