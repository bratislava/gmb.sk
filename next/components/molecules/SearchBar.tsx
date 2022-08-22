import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import CloseIcon from '../../assets/icons/close-x.svg'
import { ContentPageEntity, ContentPageEntityResponseCollection } from '../../graphql'
import { isNonEmptyArray } from '../../utils/isNonEmptyArray'
import { logError } from '../../utils/logger'
import { useDebounce } from '../../utils/useDebounce'
import Results from './Results'

interface SearchBarProps {
  closeSearchBar: () => void
}

const SearchBar = ({ closeSearchBar }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [contentPages, setContentPages] = useState<ContentPageEntity[]>()
  const debouncedSearchTerm = useDebounce(searchTerm, 750)
  const { i18n } = useTranslation()
  const locale = i18n.language

  useEffect(() => {
    /** Here we're using Strapi REST endpoint (through Next api proxy) instead of GraphQL, because Strapi GraphQL doesn't have a straightforward way to use the full text search */
    const searchContentPages = async () => {
      if (!debouncedSearchTerm) {
        setContentPages([])
        return
      }

      const query = new URLSearchParams({
        searchTerm: debouncedSearchTerm,
        locale,
      }).toString()

      const response = await fetch(`/api/search-content-pages?${query}`)
      const searchResults = (await response.json()) as ContentPageEntityResponseCollection
      setContentPages(searchResults?.data)
    }

    searchContentPages().catch(logError)
  }, [debouncedSearchTerm, locale])

  const { t } = useTranslation()
  return (
    <div className="fixed inset-x-0 top-[var(--nav-height)] z-20 flex h-[calc(100vh-var(--nav-height))] flex-col justify-between bg-gmbDark p-12">
      <button
        type="button"
        className="absolute right-xMd top-yMd text-white"
        onClick={closeSearchBar}
        aria-label={t('common.closeSearch')}
      >
        <CloseIcon className="dw-[32] dh-[32]" />
      </button>
      <div className="flex flex-1">
        <input
          className="h-fit max-w-full border-b border-solid border-b-white bg-transparent text-xl text-white focus:border-b-2 focus:outline-none active:border-b-2"
          placeholder={t('common.searchText')}
          aria-label={t('common.searchText')}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          value={searchTerm}
        />
      </div>
      {isNonEmptyArray(contentPages) ? (
        <div className="gap-25 flex flex-1 justify-start">
          <Results results={contentPages} header={t('common.found')} />
        </div>
      ) : null}
    </div>
  )
}

export default SearchBar
