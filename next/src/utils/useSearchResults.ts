import last from 'lodash/last'
import useSWRInfinite from 'swr/infinite'

import { GlobalSearchPageEntityFragment } from '@/src/services/graphql'
import {
  globalSearchFetcher,
  GlobalSearchFilters,
} from '@/src/services/meili/fetchers/globalSearchFetcher'
import { hasAttributes, isDefined } from '@/src/utils/isDefined'

export const PAGE_SIZE = 6

export const useSearchResults = (searchValue: string, locale: string, tagSlugs?: string[]) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index, previousList: GlobalSearchPageEntityFragment[]) => {
      if (index !== 0 && previousList.length === 0) {
        return null
      }

      const variables: GlobalSearchFilters = {
        searchValue,
        pageSize: PAGE_SIZE,
        page: index + 1,
        tagSlugs,
      }

      return ['SearchResults', variables, locale]
    },
    ([, variables, localeInner]) => globalSearchFetcher(variables, localeInner)
  )

  const filteredResults = data
    ?.map((result) => result.hits)
    .filter(isDefined)
    .flat()
    .filter(hasAttributes)

  const isLoadingInitialData = !data && !error

  const isLoadingMore = isLoadingInitialData || (size > 0 && data && data[size - 1] === undefined)

  const isEmpty = filteredResults?.length === 0

  const previousPagesLength = last(data)?.hits.length || 0

  const isReachingEnd = isEmpty || previousPagesLength < PAGE_SIZE

  return {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating,
    filteredResults,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
  }
}
