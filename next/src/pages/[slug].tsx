import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations'

import MainPage from '@/src/components/pages/MainPage'
import {
  ExhibitionsAndEventsQuery,
  GeneralQuery,
  MainPageEntityFragment,
  NewsQuery,
  PlacesQuery,
  TagsByCategorySlugQuery,
  TicketsQuery,
} from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { NOT_FOUND } from '@/src/utils/consts'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { getTodaysDate } from '@/src/utils/getTodaysDate'
import { isDefined } from '@/src/utils/isDefined'
import { getRouteForLocale } from '@/src/utils/localeRoutes'

interface MenuPageProps {
  generalQuery: GeneralQuery
  page: MainPageEntityFragment
  news: NewsQuery['news']
  tickets: TicketsQuery['tickets']
  exhibitions: ExhibitionsAndEventsQuery['exhibitions']
  permanentExhibitions: ExhibitionsAndEventsQuery['permanentExhibitions']
  additionalProgram: ExhibitionsAndEventsQuery['additionalProgram']
  places: PlacesQuery['places']
  tagsProgram: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsTargetGroups: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsLanguages: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsProjects: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsOthers: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsExploreTypes: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsExploreProjects: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsExploreOthers: TagsByCategorySlugQuery['tagCategoryBySlug']
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async ({ locales = [] }) => {
  const mainPageSlugsPromises = locales.map(async (locale) => client.AllMainPageSlugs({ locale }))
  const mainPageSlugsResponses = await Promise.all(mainPageSlugsPromises)

  const paths = mainPageSlugsResponses.flatMap((mainPageSlugResponse, index) =>
    mainPageSlugResponse.mainPages.filter(isDefined).map((mainPage) => ({
      params: { slug: mainPage.slug },
      locale: locales[index],
    })),
  )

  // eslint-disable-next-line no-console
  console.log(`Main pages: Generated static paths for ${paths.length} slugs with locales.`)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<MenuPageProps, StaticParams> = async ({
  params,
  locale = 'sk',
}) => {
  const slug = params?.slug

  if (!slug) {
    return NOT_FOUND
  }

  // eslint-disable-next-line no-console
  console.log(`Revalidating Main page ${locale} ${slug}`)

  const [
    generalQuery,
    { mainPages },
    { news },
    { tickets },
    { places },
    { tagCategoryBySlug: tagsProgram },
    { tagCategoryBySlug: tagsTargetGroups },
    { tagCategoryBySlug: tagsLanguages },
    { tagCategoryBySlug: tagsProjects },
    { tagCategoryBySlug: tagsOthers },
    { tagCategoryBySlug: tagsExploreTypes },
    { tagCategoryBySlug: tagsExploreProjects },
    { tagCategoryBySlug: tagsExploreOthers },
    translations,
  ] = await Promise.all([
    client.General({ locale }),
    client.MainPageBySlug({ slug, locale }),
    client.News({ locale, tag: getRouteForLocale('aktuality', locale) }),
    client.Tickets({ locale }),
    client.Places({ locale }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('program-typy', locale),
    }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('program-cielove-skupiny', locale),
    }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('program-jazyky', locale),
    }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('program-projekty', locale),
    }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('program-ostatne', locale),
    }),
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

  //  Fetch exhibition-related data

  const today = getTodaysDate()

  const tagExhibitions = getRouteForLocale('vystavy', locale)
  const tagPermanentExhibitions = getRouteForLocale('stale-expozicie', locale)
  const tagsAdditionalProgram =
    tagsProgram?.tags
      .filter(isDefined)
      .map((tag) => tag.slug)
      .filter((tagSlug) => tagSlug !== tagExhibitions && tagSlug !== tagPermanentExhibitions) ?? []

  const { exhibitions, permanentExhibitions, additionalProgram } =
    await client.ExhibitionsAndEvents({
      locale,
      today,
      tagExhibitions,
      tagPermanentExhibitions,
      tagsAdditionalProgram,
    })

  const mainPage = mainPages?.[0]

  if (!mainPage) {
    return NOT_FOUND
  }

  return {
    props: {
      generalQuery,
      page: mainPage,
      news,
      tickets,
      exhibitions,
      permanentExhibitions,
      additionalProgram,
      places,
      tagsProgram,
      tagsTargetGroups,
      tagsLanguages,
      tagsProjects,
      tagsOthers,
      tagsExploreTypes,
      tagsExploreProjects,
      tagsExploreOthers,
      ...translations,
    },
    revalidate: 10,
  }
}

const MenuPage = ({
  generalQuery,
  page,
  news,
  tickets,
  exhibitions,
  permanentExhibitions,
  additionalProgram,
  places,
  tagsProgram,
  tagsTargetGroups,
  tagsLanguages,
  tagsProjects,
  tagsOthers,
  tagsExploreTypes,
  tagsExploreProjects,
  tagsExploreOthers,
}: MenuPageProps) => {
  return (
    <GeneralContextProvider general={generalQuery}>
      <MainPage
        title={page?.title ?? ''}
        page={page}
        newsItems={news.filter(isDefined)}
        tickets={tickets.filter(isDefined)}
        exhibitions={exhibitions.filter(isDefined)}
        permanentExhibitions={permanentExhibitions.filter(isDefined)}
        additionalProgram={additionalProgram.filter(isDefined)}
        places={places.filter(isDefined)}
        tagsProgram={tagsProgram?.tags.filter(isDefined)}
        tagsTargetGroups={tagsTargetGroups?.tags.filter(isDefined)}
        tagsLanguages={tagsLanguages?.tags.filter(isDefined)}
        tagsProjects={tagsProjects?.tags.filter(isDefined)}
        tagsOthers={tagsOthers?.tags.filter(isDefined)}
        tagsExploreTypes={tagsExploreTypes?.tags.filter(isDefined)}
        tagsExploreProjects={tagsExploreProjects?.tags.filter(isDefined)}
        tagsExploreOthers={tagsExploreOthers?.tags.filter(isDefined)}
      />
    </GeneralContextProvider>
  )
}

export default MenuPage
