import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Page from '../components/pages/Page'
import { GetInvolvedPageQuery, HomePageQuery, NewsQuery } from '../graphql'
import { client } from '../utils/gql'
import { hasAttributes, withAttributes } from '../utils/isDefined'
import { ssrTranslations } from '../utils/translations'

interface GetInvolvedProps {
  getInvolvedPage: GetInvolvedPageQuery['getInvolvedPage']
  contact: HomePageQuery['contact']
  news: NewsQuery['news']
}

const GetInvolved = ({ getInvolvedPage, contact, news }: GetInvolvedProps) => {
  const { t } = useTranslation()

  if (!getInvolvedPage) {
    return null
  }

  return (
    <Page
      page={getInvolvedPage}
      title={t('navigation.getInvolved')}
      contactInfo={withAttributes(contact?.data)}
      newsItems={news?.data.filter(hasAttributes)}
    />
  )
}

export const getStaticProps: GetStaticProps<GetInvolvedProps> = async ({ locale = 'sk' }) => {
  const [{ getInvolvedPage, contact }, { news }, translations] = await Promise.all([
    client.GetInvolvedPage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    ssrTranslations({ locale }, ['common']),
  ])

  return {
    props: {
      getInvolvedPage,
      contact,
      news,
      ...translations,
    },
    revalidate: 60,
  }
}

export default GetInvolved
