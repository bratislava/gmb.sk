import { CommonSearchPageEntityFragment } from '@/src/services/graphql'
import { getMeilisearchPageOptions } from '@/src/services/meili/getMeilisearchPageOptions'
import { meiliClient } from '@/src/services/meili/meilisearch'

export type CommonSearchFilters = {
  searchValue: string
  pageSize: number
  page: number
}

export const commonSearchDefaultFilters: CommonSearchFilters = {
  searchValue: '',
  pageSize: 10,
  page: 1,
}

export const getCommonSearchQueryKey = (filters: CommonSearchFilters) => ['commonSearch', filters]

export const commonSearchFetcher = (filters: CommonSearchFilters, locale: string) => {
  return meiliClient
    .index('search_index')
    .search(filters.searchValue, {
      ...getMeilisearchPageOptions({ page: filters.page, pageSize: filters.pageSize }),
      filter: [`locale = ${locale}`],
      attributesToRetrieve: [
        // Only properties that are required to display listing are retrieved
        'id',
        'title',
        'slug',
      ],
    })
    .then((response) => {
      return {
        ...response,
        hits: response.hits.map((hit) => {
          return {
            id: hit.id,
            attributes: {
              title: hit.title,
              slug: hit.slug,
            },
          } as CommonSearchPageEntityFragment
        }),
      }
    })
}
