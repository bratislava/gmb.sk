import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ErrorPage from '../components/pages/ErrorPage'
import { ErrorPageQuery } from '../graphql'
import { client } from '../utils/gql'
import { withAttributes } from '../utils/isDefined'

interface ErrorProps {
  contact: ErrorPageQuery['contact']
  statusCode: number
}

const Error = ({ contact, statusCode }: ErrorProps) => {
  return <ErrorPage contactInfo={withAttributes(contact?.data)} statusCode={statusCode} />
}

export const getServerSideProps: GetServerSideProps<ErrorProps> = async ({ locale = 'sk', res }) => {
  const [{ contact }, translations] = await Promise.all([
    client.VisitUsPage({ locale }),
    serverSideTranslations(locale, ['common']),
  ])
  return {
    props: {
      statusCode: res.statusCode,
      contact,
      ...translations,
    },
  }
}

export default Error
