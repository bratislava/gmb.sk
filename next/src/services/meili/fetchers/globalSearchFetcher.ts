import { GlobalSearchPageEntityFragment, TagEntityFragment } from '@/src/services/graphql'
import { getMeilisearchPageOptions } from '@/src/services/meili/getMeilisearchPageOptions'
import { meiliClient } from '@/src/services/meili/meilisearch'
import { isDefined, WithAttributes } from '@/src/utils/isDefined'
import { PAGE_SIZE } from '@/src/utils/useSearchResults'

export type GlobalSearchFilters = {
  searchValue: string
  pageSize: number
  page: number
  tagSlugs?: string[]
}

export const globalSearchDefaultFilters: GlobalSearchFilters = {
  searchValue: '',
  pageSize: PAGE_SIZE,
  page: 1,
}

export const getGlobalSearchQueryKey = (filters: GlobalSearchFilters, locale: string) => [
  'globalSearch',
  filters,
  locale,
]

export const globalSearchFetcher = (filters: GlobalSearchFilters, locale: string) => {
  return meiliClient
    .index('search_index')
    .search(filters.searchValue, {
      ...getMeilisearchPageOptions({ page: filters.page, pageSize: filters.pageSize }),
      filter: [
        `locale = '${locale}'`,
        filters?.tagSlugs?.length
          ? filters.tagSlugs.map((tagSlug) => `tags.slug = '${tagSlug}'`)
          : null,
      ].filter(isDefined),
      sort: ['publishedAtTimestamp:desc'],
      attributesToRetrieve: [
        // Only properties that are required to display listing are retrieved
        'id',
        'title',
        'subtitle',
        'slug',
        'coverMedia',
        'perex',
        'tags',
        'publishedAt',
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
              subtitle: hit.subtitle,
              slug: hit.slug,
              coverMedia: {
                data: { attributes: hit.coverMedia },
              },
              perex: hit.perex,
              tags: {
                data: hit.tags.map((tag: TagEntityFragment['attributes']) => ({
                  attributes: {
                    title: tag?.title,
                    slug: tag?.slug,
                  },
                })),
              },
              publishedAt: hit.publishedAt,
            },
          } as WithAttributes<GlobalSearchPageEntityFragment>
        }),
      }
    })
}
