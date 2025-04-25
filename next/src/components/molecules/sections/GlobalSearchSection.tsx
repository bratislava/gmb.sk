import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

import Button from '@/src/components/atoms/Button'
import SearchBar from '@/src/components/molecules/SearchBar'
import CardSection from '@/src/components/molecules/sections/CardSection'
import Section, { ISectionProps } from '@/src/components/molecules/sections/Section'
import {
  globalSearchDefaultFilters,
  GlobalSearchFilters,
} from '@/src/services/meili/fetchers/globalSearchFetcher'
import { isDefined } from '@/src/utils/isDefined'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'
import { useSearch } from '@/src/utils/useSearch'
import { useSearchResults } from '@/src/utils/useSearchResults'

type GlobalSearchSectionProps = Pick<ISectionProps, 'title'>

const GlobalSearchSection = ({ title }: GlobalSearchSectionProps) => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const { input, setInput, searchValue } = useSearch({ syncWithUrlQuery: false })

  const [filters, setFilters] = useRoutePreservedState<GlobalSearchFilters>(
    globalSearchDefaultFilters
  )

  useEffect(() => {
    if (filters.searchValue === searchValue) return

    setFilters((prevFilters) => ({ ...prevFilters, page: 1, searchValue }))
  }, [filters.searchValue, searchValue, setFilters])

  // Process tag slugs from URL query parameters (when a tag is clicked in a Card or ChessboardTile)

  const { query } = useRouter()
  const { tags } = query

  useEffect(() => {
    setFilters((previousState) => ({
      ...previousState,
      tagSlugs: [...(Array.isArray(tags) ? tags : [tags])].filter(isDefined),
    }))
  }, [query, setFilters, tags])

  // Paginated results

  const { filteredResults, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useSearchResults(filters.searchValue, locale, filters?.tagSlugs)

  return (
    <Section title={title} className="relative min-h-screen bg-white">
      <div className="flex flex-col gap-yLg">
        <SearchBar input={input} setInput={setInput} className="px-xMd py-yLg" />

        {/* Search results */}
        <div className="flex flex-col">
          <h3 className="px-xMd text-xxl">{t('common.found')}</h3>
          <CardSection
            sectionItems={filteredResults?.filter(isDefined)}
            showTags
            isLoading={isLoading}
            loadmoreButton={
              hasNextPage ? (
                <div className="flex justify-center py-12">
                  <Button onClick={fetchNextPage} disabled={isFetchingNextPage}>
                    {t('common.exploreMoreContent')}
                  </Button>
                </div>
              ) : null
            }
          />
        </div>
      </div>
    </Section>
  )
}

export default GlobalSearchSection
