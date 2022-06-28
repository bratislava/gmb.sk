import { GetStaticProps, NextPage  } from 'next'

import ErrorPage from '../components/pages/ErrorPage'
import { HomePageQuery } from '../graphql'
import { client } from '../utils/gql'
import { withAttributes } from '../utils/isDefined'
import { ssrTranslations } from '../utils/translations'

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
    ssrTranslations({ locale }, ['common']),
  ])
  return {
    props: {
      contact,
      ...translations,
    },
    revalidate: 3,
  }
}

export default Custom404
