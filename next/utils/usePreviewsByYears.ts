import last from 'lodash/last'
import useSWRInfinite from 'swr/infinite'

import { SectionItemEntityFragment } from '@/graphql'
import { archiveFetcher } from '@/services/meilisearch/fetchers/archiveFetcher'
import { hasAttributes, isDefined } from '@/isDefined'

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
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index, previousList: SectionItemEntityFragment[]) => {
      if (index !== 0 && previousList.length === 0) {
        return null
      }

      const variables = {
        pageSize: PAGE_SIZE,
        page: index + 1,
        activeYears,
        searchValue,
        years: activeYears,
      }

      return ['PreviewsByYears', variables, locale]
    },
    ([, variables, localeInner]) => archiveFetcher(variables, localeInner)
  )

  const filteredPages = data
    ?.map((page) => page.hits)
    .filter(isDefined)
    .flat()
    .filter(hasAttributes)

  const isLoadingInitialData = !data && !error

  const isLoadingMore = isLoadingInitialData || (size > 0 && data && data[size - 1] === undefined)

  const isEmpty = filteredPages?.length === 0

  const previousPagesLength = last(data)?.hits.length || 0

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
