import { GetStaticProps } from 'next'
import ErrorPage from '../components/pages/ErrorPage'
import { ssrTranslations } from '../utils/translations'

interface ErrorProps {}

const Custom404 = ({}: ErrorProps) => {
  return <ErrorPage statusCode={404} />
}

export const getStaticProps: GetStaticProps<ErrorProps> = async ({ locale = 'sk' }) => {
  const [translations] = await Promise.all([ssrTranslations({ locale }, ['common'])])
  return {
    props: {
      ...translations,
    },
    revalidate: 60,
  }
}

export default Custom404
