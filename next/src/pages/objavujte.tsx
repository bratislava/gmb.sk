import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ExplorePage from '@/src/components/pages/ExplorePage'
import { ExplorePageQuery, GeneralQuery, TagsByCategorySlugQuery } from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { hasAttributes } from '@/src/utils/isDefined'
import { getRouteForLocale } from '@/src/utils/localeRoutes'

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
    serverSideTranslations(locale),
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
