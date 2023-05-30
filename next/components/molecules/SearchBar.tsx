import FocusTrap from 'focus-trap-react'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import CloseIcon from '../../assets/icons/close-x.svg'
import {
  commonSearchDefaultFilters,
  commonSearchFetcher,
  CommonSearchFilters,
  getCommonSearchQueryKey,
} from '../../services/meilisearch/fetchers/commonSearchFetcher'
import { isDefined } from '../../utils/isDefined'
import { useRoutePreservedState } from '../../utils/useRoutePreservedState'
import { useSearch } from '../../utils/useSearch'
import Results from './Results'

interface SearchBarProps {
  closeSearchBar: () => void
}

const SearchBar = ({ closeSearchBar }: SearchBarProps) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const [filters, setFilters] = useRoutePreservedState<CommonSearchFilters>(
    commonSearchDefaultFilters
  )

  const { input, setInput, searchValue } = useSearch({ syncWithUrlQuery: false })

  const { data } = useQuery({
    queryKey: getCommonSearchQueryKey(filters),
    queryFn: () => commonSearchFetcher(filters, locale),
    keepPreviousData: true,
  })

  // TODO pagination
  // const handlePageChange = (newPage: number) => {
  //   setFilters({ ...filters, page: newPage })
  // }

  useEffect(() => {
    if (filters.searchValue === searchValue) {
      return
    }

    setFilters((prevFilters) => ({ ...prevFilters, page: 1, searchValue }))
  }, [filters.searchValue, searchValue, setFilters])

  const { t } = useTranslation()
  return (
    <FocusTrap>
      <div className="fixed inset-x-0 top-[var(--nav-height)] z-20 flex h-[calc(100vh-var(--nav-height))] flex-col gap-yLg bg-gmbDark px-xLg py-yLg">
        <div>
          <input
            className="h-fit max-w-full border-b border-solid border-b-white bg-transparent text-xl text-white focus:border-b-2 focus:outline-none active:border-b-2"
            placeholder={t('common.searchText')}
            aria-label={t('common.searchText')}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            value={input}
            // It should be okay to disable this rule here, because the search bar is first thing rendered in search modal
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
        </div>
        <button
          type="button"
          className="absolute right-0 top-0 px-xMd py-yMd text-white lg:mr-2"
          onClick={closeSearchBar}
          aria-label={t('common.closeSearch')}
        >
          <CloseIcon className="dh-[30] dw-[30]" />
        </button>
        {data?.hits?.filter(isDefined).length ? (
          <div>
            <Results results={data.hits.filter(isDefined)} header={t('common.found')} />
          </div>
        ) : null}
      </div>
    </FocusTrap>
  )
}

export default SearchBar
