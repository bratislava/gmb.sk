import last from 'lodash/last'
import useSWRInfinite from 'swr/infinite'

import { PreviewsByTagsQueryVariables, SectionItemEntityFragment } from '@/graphql'
import { getTodaysDate } from '@/utils/getTodaysDate'
import { client } from '@/utils/gql'
import { hasAttributes, isDefined } from '@/utils/isDefined'

export const PAGE_SIZE = 6

export const usePreviewsByTags = ({
  activeTags,
  activePlaces,
  locale,
  kind,
}: {
  activeTags: string[]
  activePlaces: string[]
  locale: string
  kind: 'program' | 'explore'
}) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index, previousList: SectionItemEntityFragment[]) => {
      if (index !== 0 && previousList.length === 0) {
        return null
      }

      const tagSlugsVariables: Omit<PreviewsByTagsQueryVariables, 'locale'> = activeTags.includes(
        'archive'
      )
        ? {
            dateForFilteringPastEvents: getTodaysDate(),
            /** We don't send archive tag to the server
             * If there are other tags than 'archive', remove 'archive' and  use the remaining tags.
             * If archive is the only one, pass undefined */
            tagSlugs:
              activeTags.length > 1 ? activeTags.filter((tag) => tag !== 'archive') : undefined,
            /** Past program pages sorted from closest to the past
             * (If Archive is selected, it's only for program pages, so we don't need to take care about explore pages) */
            sort: ['dateFrom:desc'],
          }
        : {
            dateForFilteringFutureEvents: kind === 'program' ? getTodaysDate() : undefined,
            tagSlugs: activeTags.length > 0 ? activeTags : undefined,
            /** Explore pages sorted by addedAt from the newest
             * OR Future program pages sorted by dateTo from closest to the future */
            sort: kind === 'program' ? ['dateTo:asc'] : ['addedAt:desc'],
          }

      const activePlacesVariables = activePlaces.length > 0 ? { placesSlugs: activePlaces } : {}

      const variables = {
        locale,
        limit: PAGE_SIZE,
        offset: index * PAGE_SIZE,
        ...tagSlugsVariables,
        ...activePlacesVariables,
      } as PreviewsByTagsQueryVariables

      return ['PreviewsByTags', variables]
    },
    ([, variables]) => client.PreviewsByTags(variables)
  )

  const filteredPages = data
    ?.map((page) => page.contentPages?.data)
    .filter(isDefined)
    .flat()
    .filter(hasAttributes)

  const isLoadingInitialData = !data && !error

  const isLoadingMore = isLoadingInitialData || (size > 0 && data && data[size - 1] === undefined)

  const isEmpty = filteredPages?.length === 0

  const previousPagesLength = last(data)?.contentPages?.data.length || 0

  const isReachingEnd = isEmpty || previousPagesLength < PAGE_SIZE

  return {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating,
    filteredPages,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
  }
}
