import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import Page from '../components/pages/Page'
import { GetInvolvedPageQuery, HomePageQuery, NewsQuery } from '../graphql'
import { client } from '../utils/gql'
import { hasAttributes, withAttributes } from '../utils/isDefined'

interface GetInvolvedProps {
  getInvolvedPage: GetInvolvedPageQuery['getInvolvedPage']
  general: HomePageQuery['general']
  news: NewsQuery['news']
}

const GetInvolved = ({ getInvolvedPage, general, news }: GetInvolvedProps) => {
  const { t } = useTranslation()

  if (!getInvolvedPage) {
    return null
  }

  return (
    <Page
      page={getInvolvedPage}
      title={t('navigation.getInvolved')}
      contactInfo={withAttributes(general?.data)}
      newsItems={news?.data.filter(hasAttributes)}
    />
  )
}

export const getStaticProps: GetStaticProps<GetInvolvedProps> = async ({ locale = 'sk' }) => {
  const [{ getInvolvedPage, general }, { news }, translations] = await Promise.all([
    client.GetInvolvedPage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      getInvolvedPage,
      general,
      news,
      ...translations,
    },
    revalidate: 10,
  }
}

export default GetInvolved
