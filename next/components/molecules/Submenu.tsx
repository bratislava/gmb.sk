import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import React, { ReactNode, useState } from 'react'

import ChevronDownIcon from '../../assets/icons/chevron-down.svg'
import { getAnchor } from '../../utils/getAnchor'
import { onEnterOrSpaceKeyDown } from '../../utils/onEnterOrSpaceKeyDown'
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import SubmenuModal from './SubmenuModal'

interface SubmenuProps {
  items?: string[]
  filters?: ReactNode
}

const Submenu = ({ items, filters }: SubmenuProps) => {
  const { t } = useTranslation()

  const [isFilterOpen, setFilterOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  if ((!items || items.length === 0) && !filters) {
    return null
  }

  return (
    <>
      {/* Desktop submenu */}
      <div className="relative hidden w-full flex-col bg-gmbDark py-yMd px-xMd text-white lg:flex">
        <div className="flex w-full justify-between">
          <div className="hidden gap-xMd lg:flex">
            {items?.map((item) => (
              <Link key={item} href={`#${getAnchor(item) ?? ''}`} replace>
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
        className="relative flex w-full items-center justify-between bg-gmbDark py-yMd px-xMd text-md uppercase text-white lg:hidden"
      >
        {t('common.quickNavigation')}
        <ChevronDownIcon className="dh-[12] dw-[20]" />
      </div>

      <SubmenuModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} items={items} filters={filters} />
    </>
  )
}

export default Submenu
