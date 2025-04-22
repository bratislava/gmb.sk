import { useInfiniteQuery } from '@tanstack/react-query'

import {
  globalSearchFetcher,
  GlobalSearchFilters,
} from '@/src/services/meili/fetchers/globalSearchFetcher'
import { hasAttributes, isDefined } from '@/src/utils/isDefined'

export const PAGE_SIZE = 6

export const useSearchResults = (searchValue: string, locale: string, tagSlugs?: string[]) => {
  const options = {
    searchValue,
    pageSize: PAGE_SIZE,
    tagSlugs,
  } as Omit<GlobalSearchFilters, 'page'>

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    error,
    isError,
    isFetching,
    isPending,
    isRefetching,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['SearchResultsInfinite', options, locale],
    queryFn: ({ pageParam }) => globalSearchFetcher({ ...options, page: pageParam }, locale),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.hits.length < PAGE_SIZE ? undefined : lastPageParam + 1,
    // Check whether we’ve reached the end of the results. If not, calculate the cursor for the next page
  })

  const filteredResults =
    data?.pages
      ?.flatMap((result) => result.hits)
      .filter(isDefined)
      .filter(hasAttributes) ?? []

  return {
    data,
    filteredResults,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isFetching,
    isPending,
    isRefetching,
    refetch,
  }
}
