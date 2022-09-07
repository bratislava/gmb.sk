import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const SentryTestError = () => {
  return (
    <button
      type="button"
      onClick={() => {
        throw new Error('Sentry Frontend Error')
      }}
    >
      Throw error
    </button>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'sk' }) => {
  const translations = await serverSideTranslations(locale, ['common'])

  return {
    props: {
      ...translations,
    },
    revalidate: 10,
  }
}

export default SentryTestError
