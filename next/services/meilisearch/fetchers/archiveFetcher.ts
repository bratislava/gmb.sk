import { SectionItemEntityFragment } from '../../../graphql'
import { WithAttributes } from '../../../utils/isDefined'
import { getRouteForLocale } from '../../../utils/localeRoutes'
import { getMeilisearchPageOptions } from '../getMeilisearchPageOptions'
import { meiliClient } from '../meilisearch'

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

export const archiveFetcher = (filters: ArchiveFilters, locale: string) => {
  const exhibitionsTags = [
    getRouteForLocale('vystavy', locale),
    getRouteForLocale('stale-expozicie', locale),
  ]

  return meiliClient
    .index('search_index')
    .search(filters.searchValue, {
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
              perex: hit.perex,
              coverMedia: {
                data: {
                  attributes: hit.coverMedia,
                },
              },
            },
          } as WithAttributes<SectionItemEntityFragment>
        }),
      }
    })
}
