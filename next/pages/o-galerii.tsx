import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from '@/components/pages/Page'
import { AboutUsPageQuery, GeneralQuery, NewsQuery } from '@/graphql'
import { GeneralContextProvider } from '@/utils/generalContext'
import { client } from '@/utils/gql'
import { hasAttributes } from '@/utils/isDefined'

interface AboutProps {
  generalQuery: GeneralQuery
  aboutUsPage: AboutUsPageQuery['aboutUsPage']
  news: NewsQuery['news']
}

const About = ({ generalQuery, aboutUsPage, news }: AboutProps) => {
  const { t } = useTranslation()

  if (!aboutUsPage) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      <Page
        page={aboutUsPage}
        title={t('navigation.aboutGallery')}
        newsItems={news?.data.filter(hasAttributes)}
      />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async ({ locale = 'sk' }) => {
  const [generalQuery, { aboutUsPage }, { news }, translations] = await Promise.all([
    client.General({ locale }),
    client.AboutUsPage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      generalQuery,
      aboutUsPage,
      news,
      ...translations,
    },
    revalidate: 10,
  }
}

export default About
