import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'

import CloseIcon from '@/src/assets/icons/close-x.svg'
import Button from '@/src/components/atoms/Button'
import Link from '@/src/components/atoms/Link'
import { getAnchor } from '@/src/utils/getAnchor'

interface ISubmenuModalProps {
  onClose: () => void
  items?: string[]
  filters?: ReactNode
  onSubmenuItemClick?: () => void
}

const SubmenuModal = ({ onClose, items, filters, onSubmenuItemClick }: ISubmenuModalProps) => {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-x-0 top-nav z-20 flex h-[calc(100vh-var(--nav-height))] flex-col justify-between bg-gmbDark p-12 text-white lg:hidden">
      <div className="flex max-h-full flex-col">
        <button type="button" className="absolute right-0 top-0 px-xMd py-yMd" onClick={onClose}>
          <CloseIcon className="dh-[30] dw-[30]" />
        </button>
        <div className="mt-12 flex w-full shrink-0 grow-0 flex-col items-center gap-yMd">
          {items?.map((item) => (
            <Link
              key={getAnchor(item)}
              href={`#${getAnchor(item) ?? ''}`}
              onClick={onSubmenuItemClick}
              replace
            >
              {item}
            </Link>
          ))}
        </div>
        {filters}
        {filters && (
          <div className="mt-yMd flex justify-center lg:hidden">
            <Button onClick={onClose} color="light">
              {t('common.showResults')}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SubmenuModal
