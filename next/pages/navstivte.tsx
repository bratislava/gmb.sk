import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import Page from '../components/pages/Page'
import { NewsQuery, VisitUsPageQuery } from '../graphql'
import { client } from '../utils/gql'
import { hasAttributes, withAttributes } from '../utils/isDefined'
import { getRouteForLocale } from '../utils/localeRoutes'

interface VisitUsProps {
  visitUsPage: VisitUsPageQuery['visitUsPage']
  general: VisitUsPageQuery['general']
  news: NewsQuery['news']
  tickets: VisitUsPageQuery['tickets']
}

const VisitUs = ({ visitUsPage, general, news, tickets }: VisitUsProps) => {
  const { t } = useTranslation()

  if (!visitUsPage) {
    return null
  }

  return (
    <Page
      page={visitUsPage}
      title={t('navigation.visitUs')}
      contactInfo={withAttributes(general?.data)}
      newsItems={news?.data.filter(hasAttributes)}
      tickets={tickets?.data.filter(hasAttributes)}
    />
  )
}

export const getStaticProps: GetStaticProps<VisitUsProps> = async ({ locale = 'sk' }) => {
  const [{ visitUsPage, general, tickets }, { news }, translations] = await Promise.all([
    client.VisitUsPage({ locale }),
    client.News({ locale, tag: getRouteForLocale('aktuality', locale) }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      visitUsPage,
      general,
      news,
      tickets,
      ...translations,
    },
    revalidate: 10,
  }
}

export default VisitUs
