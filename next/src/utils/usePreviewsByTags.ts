import { useInfiniteQuery } from '@tanstack/react-query'

import { PreviewsByTagsQueryVariables, SectionItemEntityFragment } from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { getTodaysDate } from '@/src/utils/getTodaysDate'
import { isDefined, WithAttributes, withAttributes } from '@/src/utils/isDefined'

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
  const tagSlugsVariables: Omit<PreviewsByTagsQueryVariables, 'locale'> = activeTags.includes(
    'archive'
  )
    ? {
        dateForFilteringPastEvents: getTodaysDate(),
        /** We don't send archive tag to the server
         * If there are other tags than 'archive', remove 'archive' and  use the remaining tags.
         * If archive is the only one, pass undefined */
        tagSlugs: activeTags.length > 1 ? activeTags.filter((tag) => tag !== 'archive') : undefined,
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

  const options = {
    locale,
    limit: PAGE_SIZE,
    ...tagSlugsVariables,
    ...activePlacesVariables,
  } as Omit<PreviewsByTagsQueryVariables, 'offset'>
  // Omit offset from options as it will be calculated dynamically based on pageParam in the queryFn

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
    queryKey: ['PreviewsByTags', options, locale],
    queryFn: ({ pageParam }) =>
      client.PreviewsByTags({ ...options, offset: pageParam * PAGE_SIZE }),
    initialPageParam: 0, // This is required in v5
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      (lastPage.contentPages?.data?.length ?? 0) < PAGE_SIZE ? undefined : lastPageParam + 1,
    // Check whether we’ve reached the data's end. If not, calculate the cursor for the next page
  })

  const filteredPages =
    (data?.pages
      ?.flatMap((page) => page.contentPages?.data)
      .filter(isDefined)
      .filter(withAttributes) as WithAttributes<SectionItemEntityFragment>[]) ?? []

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
