import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ErrorPage from '@/src/components/pages/ErrorPage'
import { GeneralQuery } from '@/src/services/graphql'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { client } from '@/src/utils/gql'

interface ErrorProps {
  generalQuery: GeneralQuery
  statusCode: number
}

const Error = ({ generalQuery, statusCode }: ErrorProps) => {
  return (
    <GeneralContextProvider general={generalQuery}>
      <ErrorPage statusCode={statusCode} />
    </GeneralContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps<ErrorProps> = async (context) => {
  const { locale = 'sk', res } = context

  const [generalQuery, translations] = await Promise.all([
    client.General({ locale }),
    client.VisitUsPage({ locale }),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      generalQuery,
      statusCode: res.statusCode,
      ...translations,
    },
  }
}

export default Error
