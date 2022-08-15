import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import Page from '../components/pages/Page'
import { AboutUsPageQuery, NewsQuery } from '../graphql'
import { client } from '../utils/gql'
import { hasAttributes, withAttributes } from '../utils/isDefined'

interface AboutProps {
  aboutUsPage: AboutUsPageQuery['aboutUsPage']
  general: AboutUsPageQuery['general']
  news: NewsQuery['news']
}

const About = ({ aboutUsPage, general, news }: AboutProps) => {
  const { t } = useTranslation()

  if (!aboutUsPage) {
    return null
  }

  return (
    <Page
      page={aboutUsPage}
      title={t('navigation.aboutGallery')}
      contactInfo={withAttributes(general?.data)}
      newsItems={news?.data.filter(hasAttributes)}
    />
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async ({ locale = 'sk' }) => {
  const [{ aboutUsPage, general }, { news }, translations] = await Promise.all([
    client.AboutUsPage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      aboutUsPage,
      general,
      news,
      ...translations,
    },
    revalidate: 10,
  }
}

export default About
