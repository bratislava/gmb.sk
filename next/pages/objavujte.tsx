import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import ExplorePage from '../components/pages/ExplorePage'
import { ExplorePageQuery, TagsByCategorySlugQuery } from '../graphql'
import { client } from '../utils/gql'
import { hasAttributes, withAttributes } from '../utils/isDefined'
import { getRouteForLocale } from '../utils/localeRoutes'

interface ExploreProps {
  explorePage: ExplorePageQuery['explorePage']
  contact: ExplorePageQuery['contact']
  tagsTypes: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsProjects: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsOthers: TagsByCategorySlugQuery['tagCategoryBySlug']
}

const Explore = ({ explorePage, contact, tagsTypes, tagsProjects, tagsOthers }: ExploreProps) => {
  if (!explorePage) {
    return null
  }

  return (
    <ExplorePage
      explorePage={explorePage}
      contactInfo={withAttributes(contact?.data)}
      tagsTypes={tagsTypes?.data?.attributes?.tags?.data.filter(hasAttributes)}
      tagsProjects={tagsProjects?.data?.attributes?.tags?.data.filter(hasAttributes)}
      tagsOthers={tagsOthers?.data?.attributes?.tags?.data.filter(hasAttributes)}
    />
  )
}

export const getStaticProps: GetStaticProps<ExploreProps> = async ({ locale = 'sk' }) => {
  const [
    { explorePage, contact },
    { tagCategoryBySlug: tagsTypes },
    { tagCategoryBySlug: tagsProjects },
    { tagCategoryBySlug: tagsOthers },
    translations,
  ] = await Promise.all([
    client.ExplorePage({ locale }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('objavujte-typy', locale),
    }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('objavujte-projekty', locale),
    }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('objavujte-ostatne', locale),
    }),
    serverSideTranslations(locale, ['common']),
  ])


  return {
    props: {
      explorePage,
      tagsTypes,
      tagsProjects,
      tagsOthers,
      contact,
      ...translations,
    },
  }
}


export default Explore
