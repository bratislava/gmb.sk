import { useTranslation } from 'next-i18next'
import { useEffect, useMemo, useState } from 'react'

import Button from '@/src/components/atoms/Button'
import Filters from '@/src/components/molecules/Filters'
import CardSection from '@/src/components/molecules/sections/CardSection'
import Section, { ISectionProps } from '@/src/components/molecules/sections/Section'
import Submenu from '@/src/components/molecules/Submenu'
import { archiveDefaultFilters, ArchiveFilters } from '@/src/services/meili/fetchers/archiveFetcher'
import { isDefined } from '@/src/utils/isDefined'
import { usePreviewsByYears } from '@/src/utils/usePreviewsByYears'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'
import { useSearch } from '@/src/utils/useSearch'

type ExhibitionArchiveSectionProps = Pick<ISectionProps, 'title'>

const ExhibitionArchiveSection = ({ title }: ExhibitionArchiveSectionProps) => {
  const { t, i18n } = useTranslation()

  const [filters, setFilters] = useRoutePreservedState<ArchiveFilters>(archiveDefaultFilters)

  const { input, setInput, searchValue } = useSearch({ syncWithUrlQuery: false })

  // array of strings representing years from 2006 to current year
  const years = useMemo(() => {
    const todaysYear = new Date().getFullYear()
    const startYear = 2006 // this is the oldest exhibition

    return Array.from({ length: todaysYear - startYear + 1 }, (_, i) =>
      (i + startYear).toString()
    ).reverse()
  }, [])

  const [activeYears, setActiveYears] = useState<string[]>([])

  const { filteredPages, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    usePreviewsByYears({
      searchValue,
      activeYears: activeYears.length > 0 ? activeYears : [],
      locale: i18n.language,
    })

  useEffect(() => {
    if (filters.searchValue === searchValue) {
      return
    }
    setFilters((prevFilters) => ({ ...prevFilters, page: 1, searchValue }))
  }, [filters.searchValue, searchValue, setFilters])

  useEffect(() => {
    setFilters((prevFilters) => ({ ...prevFilters, page: 1, years: activeYears }))
  }, [filters.years, activeYears, setFilters])

  return (
    <Section title={title}>
      <Submenu
        clearFilters={() => {
          setActiveYears([])
        }}
        filters={
          <>
            {/* TODO We could use the SearchBar component here */}
            <div>
              <input
                className="h-fit max-w-full border-b-2 border-solid border-white/60 bg-transparent text-xl focus:border-white/100 focus:outline-none active:border-white/100"
                placeholder={t('common.searchText')}
                aria-label={t('common.searchText')}
                onChange={(e) => {
                  setInput(e.target.value)
                }}
                value={input}
              />
            </div>
            <Filters years={years} activeYears={activeYears} setActiveYears={setActiveYears} />
          </>
        }
      />
      <div className="relative min-h-screen bg-white">
        <CardSection
          sectionItems={filteredPages?.filter(isDefined)}
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
    </Section>
  )
}

export default ExhibitionArchiveSection
