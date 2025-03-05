import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ExhibitionsPage from '@/components/pages/ExhibitionsPage'
import { ExhibitionsPageQuery, GeneralQuery, PlacesQuery, TagsByCategorySlugQuery } from '@/graphql'
import { GeneralContextProvider } from '@/utils/generalContext'
import { getTodaysDate } from '@/utils/getTodaysDate'
import { client } from '@/utils/gql'
import { hasAttributes } from '@/utils/isDefined'
import { getRouteForLocale } from '@/utils/localeRoutes'

interface ExhibitionsProps {
  generalQuery: GeneralQuery
  exhibitionsPage: ExhibitionsPageQuery['exhibitionsPage']
  exhibitions: ExhibitionsPageQuery['exhibitions']
  permanentExhibitions: ExhibitionsPageQuery['permanentExhibitions']
  additionalProgram: ExhibitionsPageQuery['additionalProgram']
  tagsProgram: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsTargetGroups: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsLanguages: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsProjects: TagsByCategorySlugQuery['tagCategoryBySlug']
  tagsOthers: TagsByCategorySlugQuery['tagCategoryBySlug']
  places: PlacesQuery['places']
}

const Exhibitions = ({
  generalQuery,
  exhibitionsPage,
  exhibitions,
  permanentExhibitions,
  additionalProgram,
  tagsProgram,
  tagsTargetGroups,
  tagsLanguages,
  tagsProjects,
  tagsOthers,
  places,
}: ExhibitionsProps) => {
  if (!exhibitionsPage) {
    return null
  }

  return (
    <GeneralContextProvider general={generalQuery}>
      <ExhibitionsPage
        exhibitionsPage={exhibitionsPage}
        exhibitions={exhibitions?.data.filter(hasAttributes)}
        permanentExhibitions={permanentExhibitions?.data.filter(hasAttributes)}
        additionalProgram={additionalProgram?.data.filter(hasAttributes)}
        tagsProgram={tagsProgram?.data?.attributes?.tags?.data.filter(hasAttributes)}
        tagsTargetGroups={tagsTargetGroups?.data?.attributes?.tags?.data.filter(hasAttributes)}
        tagsLanguages={tagsLanguages?.data?.attributes?.tags?.data.filter(hasAttributes)}
        tagsProjects={tagsProjects?.data?.attributes?.tags?.data.filter(hasAttributes)}
        tagsOthers={tagsOthers?.data?.attributes?.tags?.data.filter(hasAttributes)}
        places={places?.data.filter(hasAttributes)}
      />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<ExhibitionsProps> = async ({ locale = 'sk' }) => {
  const today = getTodaysDate()

  const [
    generalQuery,
    { tagCategoryBySlug: tagsProgram },
    { tagCategoryBySlug: tagsTargetGroups },
    { tagCategoryBySlug: tagsLanguages },
    { tagCategoryBySlug: tagsProjects },
    { tagCategoryBySlug: tagsOthers },
    { places },
    translations,
  ] = await Promise.all([
    client.General({ locale }),
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
    client.Places({ locale }),
    serverSideTranslations(locale),
  ])

  const tagExhibitions = getRouteForLocale('vystavy', locale)
  const tagPermanentExhibitions = getRouteForLocale('stale-expozicie', locale)
  const tagsAdditionalProgram =
    tagsProgram?.data?.attributes?.tags?.data
      .filter(hasAttributes)
      .map((tag) => tag.attributes.slug)
      .filter((slug) => slug !== tagExhibitions && slug !== tagPermanentExhibitions) ?? []

  const { exhibitionsPage, exhibitions, permanentExhibitions, additionalProgram } =
    await client.ExhibitionsPage({
      locale,
      today,
      tagExhibitions,
      tagPermanentExhibitions,
      tagsAdditionalProgram,
    })

  return {
    props: {
      generalQuery,
      exhibitionsPage,
      exhibitions,
      permanentExhibitions,
      additionalProgram,
      tagsProgram,
      tagsTargetGroups,
      tagsLanguages,
      tagsProjects,
      tagsOthers,
      places,
      ...translations,
    },
    revalidate: 10,
  }
}

export default Exhibitions
