import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import { ReactNode, useEffect, useState } from 'react'

import ChevronDownIcon from '@/assets/icons/chevron-down.svg'
import Button from '@/components/atoms/Button'
import Link from '@/components/atoms/Link'
import SubmenuModal from '@/components/molecules/SubmenuModal'
import { getAnchor } from '@/utils/getAnchor'
import { onEnterOrSpaceKeyDown } from '@/utils/onEnterOrSpaceKeyDown'

interface SubmenuProps {
  items?: string[]
  filters?: ReactNode
  clearFilters?: () => void
}

const Submenu = ({ items, filters, clearFilters }: SubmenuProps) => {
  const { t } = useTranslation()

  const [isFilterOpen, setFilterOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  if ((!items || items.length === 0) && !filters) {
    return null
  }

  const handleSubmenuItemClick = () => {
    if (clearFilters) {
      clearFilters()
    }
    setModalOpen(false)
    setFilterOpen(false)
  }

  return (
    <>
      {/* Desktop submenu */}
      <div className="relative hidden w-full flex-col bg-gmbDark px-xMd py-yMd text-white lg:flex">
        <div className="flex w-full justify-between">
          <div className="hidden gap-xMd lg:flex">
            {items?.map((item) => (
              <Link
                key={item}
                href={`#${getAnchor(item) ?? ''}`}
                replace
                onClick={handleSubmenuItemClick}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="">
            {filters && (
              <Button
                size="link"
                color="light"
                className="flex items-center gap-xSm text-nav"
                aria-expanded={isFilterOpen}
                onClick={() => {
                  setFilterOpen((prev) => !prev)
                }}
              >
                {t('common.filter')} <ChevronDownIcon className="dh-[12] dw-[20]" />
              </Button>
            )}
          </div>
        </div>
        <div
          className={cx({
            visible: isFilterOpen,
            hidden: !isFilterOpen,
          })}
        >
          {filters}
        </div>
      </div>

      {/* Mobile submenu */}
      <div
        role="button"
        onClick={() => {
          setModalOpen((prev) => !prev)
        }}
        onKeyDown={onEnterOrSpaceKeyDown(() => setModalOpen((prev) => !prev))}
        tabIndex={0}
        aria-expanded={isModalOpen}
        className="relative flex w-full items-center justify-between bg-gmbDark px-xMd py-yMd text-md uppercase text-white lg:hidden"
      >
        {t('common.quickNavigation')}
        <ChevronDownIcon className="dh-[12] dw-[20]" />
      </div>

      {isModalOpen && (
        <SubmenuModal
          onClose={() => setModalOpen(false)}
          onSubmenuItemClick={handleSubmenuItemClick}
          items={items}
          filters={filters}
        />
      )}
    </>
  )
}

export default Submenu
