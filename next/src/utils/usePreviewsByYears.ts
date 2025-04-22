import { useInfiniteQuery } from '@tanstack/react-query'

import { archiveFetcher, ArchiveFilters } from '@/src/services/meili/fetchers/archiveFetcher'
import { hasAttributes, isDefined } from '@/src/utils/isDefined'

export const PAGE_SIZE = 6

export const usePreviewsByYears = ({
  searchValue,
  activeYears,
  locale,
}: {
  searchValue: string
  activeYears: string[]
  locale: string
}) => {
  const options = {
    searchValue,
    pageSize: PAGE_SIZE,
    years: activeYears,
  } as Omit<ArchiveFilters, 'page'>

  const {
    data,
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
  } = useInfiniteQuery({
    queryKey: ['PreviewsByYears', options, locale],
    queryFn: ({ pageParam }) => archiveFetcher({ ...options, page: pageParam }, locale),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.hits.length < PAGE_SIZE ? undefined : lastPageParam + 1,
  })

  const filteredPages =
    data?.pages
      ?.flatMap((page) => page.hits)
      .filter(isDefined)
      .filter(hasAttributes) ?? []

  return {
    data,
    filteredPages,
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
