import { useTranslation } from 'next-i18next'
import { Dispatch, SetStateAction } from 'react'

import cn from '@/src/utils/cn'

type SearchBarProps = {
  input: string
  setInput: Dispatch<SetStateAction<string>>
  className?: string
}

const SearchBar = ({ input, setInput, className }: SearchBarProps) => {
  const { t } = useTranslation()

  return (
    <div className={cn('bg-gmbDark', className)}>
      <input
        className="h-fit max-w-full border-b-2 border-solid border-white/60 bg-transparent text-xl text-white focus:border-white/100 focus:outline-none active:border-white/100"
        placeholder={t('common.searchText')}
        aria-label={t('common.searchText')}
        onChange={(event) => {
          setInput(event.target.value)
        }}
        value={input}
      />
    </div>
  )
}

export default SearchBar
