import { useTranslation } from 'next-i18next';
import React from 'react';
import CloseIcon from '../../assets/icons/close-x.svg';
import { ContentPage } from '../../graphql';
import { isNonEmptyArray } from '../../utils/isNonEmptyArray';
import { useDebounce } from '../../utils/useDebounce';
import Results from './Results';

interface SearchBarProps {
  closeSearchBar: () => void;
}

export const SearchBar = ({ closeSearchBar }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [contentPages, setContentPages] = React.useState<ContentPage[]>();
  const debouncedSearchTerm = useDebounce(searchTerm, 750);
  const { i18n } = useTranslation();
  const locale = i18n.language;

  React.useEffect(() => {
    /** Here we're using Strapi REST endpoint (through Next api proxy) instead of GraphQL, because Strapi GraphQL doesn't have a straightforward way to use the full text search */
    const searchContentPages = async () => {
      if (!debouncedSearchTerm) {
        setContentPages([]);
        return;
      }

      try {
        const query = new URLSearchParams({
          searchTerm: debouncedSearchTerm,
          locale,
        });
        const response = await fetch(`/api/search-content-pages?${query}`);
        const searchResults: ContentPage[] = await response.json();

        setContentPages(searchResults);
      } catch (error) {
        console.error(error);
      }
    };

    searchContentPages();
  }, [debouncedSearchTerm, locale]);

  const { t } = useTranslation();
  return (
    <div className="bg-gmbDark fixed z-20 top-[var(--height-nav)] left-0 right-0 h-[calc(100vh-var(--height-nav))] flex flex-col justify-between p-12">
      <button
        className="absolute right-xStandard top-yStandard"
        onClick={closeSearchBar}
      >
        <CloseIcon fill="white" />
      </button>
      <div className="flex flex-1">
        {/* TODO: Removing outline with `outline-none` is a bad accessibility practice */}
        <input
          className="max-w-full text-xl text-white bg-transparent border-b border-b-white border-b-solid h-fit active:outline-none focus:outline-none active:border-b focus:border-b active:border-b-white focus:border-b-white active-border-b-solid focus:border-b-solid"
          placeholder={t('common.searchText')}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
      </div>
      {isNonEmptyArray(contentPages) ? (
        <div className="flex justify-start flex-1 gap-25">
          <Results results={contentPages} header={t('common.found')} />
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
