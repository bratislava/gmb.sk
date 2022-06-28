import { GetStaticProps, NextPage  } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ErrorPage from '../components/pages/ErrorPage'
import { HomePageQuery } from '../graphql'
import { client } from '../utils/gql'
import { withAttributes } from '../utils/isDefined'

interface ErrorProps {
  contact: HomePageQuery['contact']
}

const Custom404: NextPage<ErrorProps> = ({ contact }: ErrorProps) => {
  if (!contact) {
    return null
  }

  return <ErrorPage contactInfo={withAttributes(contact?.data)} statusCode={404} />
}

export const getStaticProps: GetStaticProps<ErrorProps> = async ({ locale = 'sk' }) => {
  const [{ contact }, translations] = await Promise.all([
    client.VisitUsPage({ locale }),
    serverSideTranslations(locale, ['common']),
  ])
  return {
    props: {
      contact,
      ...translations,
    },
    revalidate: 60,
  }
}

export default Custom404
