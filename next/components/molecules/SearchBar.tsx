import { useTranslation } from 'next-i18next'
import React from 'react'

import CloseIcon from '../../assets/icons/close-x.svg'
import { ContentPage } from '../../graphql'
import { isNonEmptyArray } from '../../utils/isNonEmptyArray'
import { useDebounce } from '../../utils/useDebounce'
import Results from './Results'

interface SearchBarProps {
  closeSearchBar: () => void
}

export const SearchBar = ({ closeSearchBar }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [contentPages, setContentPages] = React.useState<ContentPage[]>()
  const debouncedSearchTerm = useDebounce(searchTerm, 750)
  const { i18n } = useTranslation()
  const locale = i18n.language

  React.useEffect(() => {
    /** Here we're using Strapi REST endpoint (through Next api proxy) instead of GraphQL, because Strapi GraphQL doesn't have a straightforward way to use the full text search */
    const searchContentPages = async () => {
      if (!debouncedSearchTerm) {
        setContentPages([])
        return
      }

      try {
        const query = new URLSearchParams({
          searchTerm: debouncedSearchTerm,
          locale,
        })
        const response = await fetch(`/api/search-content-pages?${query}`)
        const searchResults: ContentPage[] = await response.json()

        setContentPages(searchResults)
      } catch (error) {
        console.error(error)
      }
    }

    searchContentPages()
  }, [debouncedSearchTerm, locale])

  const { t } = useTranslation()
  return (
    <div className="fixed inset-x-0 top-[var(--height-nav)] z-50 flex h-[calc(100vh-var(--height-nav))] flex-col justify-between bg-gmbDark p-12">
      <button className="absolute right-xMd top-yMd" onClick={closeSearchBar}>
        <CloseIcon fill="white" />
      </button>
      <div className="flex flex-1">
        {/* TODO: Removing outline with `outline-none` is a bad accessibility practice */}
        <input
          className="border-b-solid active-border-b-solid focus:border-b-solid h-fit max-w-full border-b border-b-white bg-transparent text-xl text-white focus:border-b focus:border-b-white focus:outline-none active:border-b active:border-b-white active:outline-none"
          placeholder={t('common.searchText')}
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
