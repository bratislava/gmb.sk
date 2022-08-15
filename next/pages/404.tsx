import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ErrorPage from '../components/pages/ErrorPage'
import { HomePageQuery } from '../graphql'
import { client } from '../utils/gql'
import { withAttributes } from '../utils/isDefined'

interface ErrorProps {
  general: HomePageQuery['general']
}

const Custom404: NextPage<ErrorProps> = ({ general }: ErrorProps) => {
  return <ErrorPage contactInfo={withAttributes(general?.data)} statusCode={404} />
}

export const getStaticProps: GetStaticProps<ErrorProps> = async ({ locale = 'sk' }) => {
  const [{ general }, translations] = await Promise.all([
    client.VisitUsPage({ locale }),
    serverSideTranslations(locale, ['common']),
  ])
  return {
    props: {
      general,
      ...translations,
    },
    revalidate: 10,
  }
}

export default Custom404
