import { useTranslation } from 'next-i18next'
import { useEffect, useMemo, useState } from 'react'

import Button from '@/src/components/atoms/Button'
import Seo from '@/src/components/atoms/Seo'
import Filters from '@/src/components/molecules/Filters'
import CardSection from '@/src/components/molecules/sections/CardSection'
import Submenu from '@/src/components/molecules/Submenu'
import PageWrapper from '@/src/components/pages/PageWrapper'
import { ArchivePageQuery } from '@/src/services/graphql'
import { archiveDefaultFilters, ArchiveFilters } from '@/src/services/meili/fetchers/archiveFetcher'
import { isDefined } from '@/src/utils/isDefined'
import { usePreviewsByYears } from '@/src/utils/usePreviewsByYears'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'
import { useSearch } from '@/src/utils/useSearch'

interface ArchivePageProps {
  archivePage: ArchivePageQuery['archivePage']
}

const ArchivePage = ({ archivePage }: ArchivePageProps) => {
  const { t, i18n } = useTranslation()

  const seo = archivePage?.data?.attributes?.archiveSeo

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

  const { size, setSize, filteredPages, isLoadingInitialData, isLoadingMore, isReachingEnd } =
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
    if (filters.years === activeYears) {
      return
    }
    setFilters((prevFilters) => ({ ...prevFilters, page: 1, years: activeYears }))
  }, [filters.years, activeYears, setFilters])

  return (
    <PageWrapper>
      <Seo seo={seo} />
      <Submenu
        clearFilters={() => {
          setActiveYears([])
        }}
        filters={
          <>
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
          isLoading={isLoadingInitialData}
          loadmoreButton={
            !isReachingEnd && (
              <div className="flex justify-center py-12">
                <Button onClick={() => setSize(size + 1)} disabled={isLoadingMore}>
                  {t('common.exploreMoreContent')}
                </Button>
              </div>
            )
          }
        />
      </div>
    </PageWrapper>
  )
}

export default ArchivePage
