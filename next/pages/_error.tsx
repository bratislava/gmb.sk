import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ErrorPage from '../components/pages/ErrorPage'
import { ErrorPageQuery } from '../graphql'
import { client } from '../utils/gql'
import { withAttributes } from '../utils/isDefined'

interface ErrorProps {
  general: ErrorPageQuery['general']
  statusCode: number
}

const Error = ({ general, statusCode }: ErrorProps) => {
  return <ErrorPage contactInfo={withAttributes(general?.data)} statusCode={statusCode} />
}

export const getServerSideProps: GetServerSideProps<ErrorProps> = async ({ locale = 'sk', res }) => {
  const [{ general }, translations] = await Promise.all([
    client.VisitUsPage({ locale }),
    serverSideTranslations(locale, ['common']),
  ])
  return {
    props: {
      statusCode: res.statusCode,
      general,
      ...translations,
    },
  }
}

export default Error
