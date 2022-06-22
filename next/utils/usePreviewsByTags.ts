import { last } from 'lodash'
import useSWRInfinite from 'swr/infinite'

import { SectionItemEntityFragment } from '../graphql'
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
      const variables = {
        locale,
        limit: PAGE_SIZE,
        offset: index * PAGE_SIZE,
        ...(activeTags.length && { tagSlugs: activeTags }),
        ...(activePlaces.length && { placesSlugs: activePlaces }),
      }

      return ['PreviewsByTags', variables]
    },
    (_key, variables) => client.PreviewsByTags(variables)
  )

  const filteredPages = data
    ?.map((page) => page.contentPages?.data)
    .filter(isDefined)
    .flat()
    .filter(hasAttributes)

  const isLoadingInitialData = !data && !error

  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined')

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
