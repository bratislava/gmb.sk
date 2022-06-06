import { GetServerSideProps } from 'next'
import React from 'react'
import DetailPage from '../../components/pages/DetailPage'
import { ContentPageBySlugQuery } from '../../graphql'
import { client } from '../../utils/gql'
import { withAttributes } from '../../utils/isDefined'
import { ssrTranslations } from '../../utils/translations'

interface DetailProps {
  contentPage: ContentPageBySlugQuery['contentPageBySlug']
  contact: ContentPageBySlugQuery['contact']
}

const Detail = ({ contentPage, contact }: DetailProps) => {
  const contentPageWithAttributes = withAttributes(contentPage?.data)

  if (!contentPage || !contentPageWithAttributes) {
    return null
  }

  return <DetailPage contentPage={contentPageWithAttributes} contactInfo={withAttributes(contact?.data)} />
}

export const getServerSideProps: GetServerSideProps<DetailProps> = async ({ query, locale }) => {
  const slug = (typeof query.slug === 'string' ? query.slug : query.slug?.join('/')) ?? ''

  const [{ contentPageBySlug: contentPage, contact }, translations] = await Promise.all([
    client.ContentPageBySlug({ slug, locale }),
    ssrTranslations({ locale }, ['common']),
  ])

  if (!contentPage) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      contentPage,
      contact,
      ...translations,
    },
  }
}

export default Detail
