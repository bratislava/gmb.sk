import { SectionItemEntityFragment } from '@/src/services/graphql'
import { getMeilisearchPageOptions } from '@/src/services/meili/getMeilisearchPageOptions'
import { meiliClient } from '@/src/services/meili/meilisearch'
import { getRouteForLocale } from '@/src/utils/localeRoutes'

export type ArchiveFilters = {
  searchValue: string
  years: string[]
  pageSize: number
  page: number
}

export const archiveDefaultFilters: ArchiveFilters = {
  searchValue: '',
  years: [],
  pageSize: 6,
  page: 1,
}

// export const getArchiveQueryKey = (filters: ArchiveFilters, locale: string) => ['archive', filters, locale]

export const archiveFetcher = async (filters: ArchiveFilters, locale: string) => {
  const exhibitionsTags = [
    getRouteForLocale('vystavy', locale),
    getRouteForLocale('stale-expozicie', locale),
  ]

  return meiliClient.index('search_index').search(filters.searchValue, {
    ...getMeilisearchPageOptions({ page: filters.page, pageSize: filters.pageSize }),
    filter: [
      `locale = ${locale}`,
      `tags.slug IN [${exhibitionsTags.join(', ')}]`,
      filters.years.length > 0 ? `exhibitionYear IN [${filters.years.join(', ')}]` : '',
    ],
    sort: ['exhibitionYear:desc'],
    attributesToRetrieve: [
      // Only properties that are required to display listing are retrieved
      'id',
      'title',
      'subtitle',
      'slug',
      'coverMedia',
      'perex',
    ],
  }) as Promise<{ hits: SectionItemEntityFragment[] | null }>
}
