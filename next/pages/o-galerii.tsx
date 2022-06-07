import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Page from '../components/pages/Page'
import { AboutUsPageQuery, NewsQuery } from '../graphql'
import { client } from '../utils/gql'
import { hasAttributes, withAttributes } from '../utils/isDefined'
import { ssrTranslations } from '../utils/translations'

interface AboutProps {
  aboutUsPage: AboutUsPageQuery['aboutUsPage']
  contact: AboutUsPageQuery['contact']
  news: NewsQuery['news']
}

const About = ({ aboutUsPage, contact, news }: AboutProps) => {
  const { t } = useTranslation()

  if (!aboutUsPage) {
    return null
  }

  return (
    <Page
      page={aboutUsPage}
      title={t('navigation.aboutGallery')}
      contactInfo={withAttributes(contact?.data)}
      newsItems={news?.data.filter(hasAttributes)}
    />
  )
}

export const getServerSideProps: GetServerSideProps<AboutProps> = async ({ locale = 'sk' }) => {
  const [{ aboutUsPage, contact }, { news }, translations] = await Promise.all([
    client.AboutUsPage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    ssrTranslations({ locale }, ['common']),
  ])

  return {
    props: {
      aboutUsPage,
      contact,
      news,
      ...translations,
    },
  }
}

export default About