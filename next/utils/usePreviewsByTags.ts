import last from 'lodash/last'
import useSWRInfinite from 'swr/infinite'

import { SectionItemEntityFragment } from '../graphql'
import { getTodaysDate } from './getTodaysDate'
import { client } from './gql'
import { hasAttributes, isDefined } from './isDefined'

export const PAGE_SIZE = 6

export const usePreviewsByTags = ({
  activeTags,
  activePlaces,
  locale,
}: {
  activeTags: string[]
  activePlaces: string[]
  locale: string
}) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index, previousList: SectionItemEntityFragment[]) => {
      if (index !== 0 && previousList.length === 0) {
        return null
      }

      const tagSlugsVariables = activeTags.length > 0 ? { tagSlugs: activeTags } : {}

      const archiveVariables = activeTags.includes('archive')
        ? {
            dateTo: getTodaysDate(),
            /** We don't send archive tag to the server
             * If there are other tags than 'archive', remove 'archive' and  use the remaining tags.
             * If archive is the only one, pass undefiend */
            tagSlugs: activeTags.length > 1 ? activeTags.filter((tag) => tag !== 'archive') : undefined,
          }
        : {}

      const activePlacesVariables = activePlaces.length > 0 ? { placesSlugs: activePlaces } : {}

      const variables = {
        locale,
        limit: PAGE_SIZE,
        offset: index * PAGE_SIZE,
        ...tagSlugsVariables,
        ...archiveVariables,
        ...activePlacesVariables,
      }

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
