import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ExplorePage from '../components/pages/ExplorePage'
import { ExplorePageQuery, GeneralQuery, TagsByCategorySlugQuery } from '../graphql'
import { GeneralContextProvider } from '../utils/generalContext'
import { client } from '../utils/gql'
import { hasAttributes } from '../utils/isDefined'
import { getRouteForLocale } from '../utils/localeRoutes'

interface ExploreProps {
  generalQuery: GeneralQuery
  explorePage: ExplorePageQuery['explorePage']
  tagsTypes: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsProjects: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsOthers: TagsByCategorySlugQuery['tagCategoryBySlug']
}

const Explore = ({
  generalQuery,
  explorePage,
  tagsTypes,
  tagsProjects,
  tagsOthers,
}: ExploreProps) => {
  if (!explorePage) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      <ExplorePage
        explorePage={explorePage}
        tagsTypes={tagsTypes?.data?.attributes?.tags?.data.filter(hasAttributes)}
        tagsProjects={tagsProjects?.data?.attributes?.tags?.data.filter(hasAttributes)}
        tagsOthers={tagsOthers?.data?.attributes?.tags?.data.filter(hasAttributes)}
      />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<ExploreProps> = async ({ locale = 'sk' }) => {
  const [
    generalQuery,
    { explorePage },
    { tagCategoryBySlug: tagsTypes },
    { tagCategoryBySlug: tagsProjects },
    { tagCategoryBySlug: tagsOthers },
    translations,
  ] = await Promise.all([
    client.General({ locale }),
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
      generalQuery,
      explorePage,
      tagsTypes,
      tagsProjects,
      tagsOthers,
      ...translations,
    },
    revalidate: 10,
  }
}

export default Explore
