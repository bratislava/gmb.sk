import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close-x.svg'
import { getAnchor } from '../../utils/getAnchor'
import Button from '../atoms/Button'
import Link from '../atoms/Link'

interface ISubmenuModalProps {
  isOpen: boolean
  onClose: () => void
  items?: string[]
  filters?: ReactNode
}

const SubmenuModal = ({ isOpen, onClose, items, filters }: ISubmenuModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: { inset: '0' },
        overlay: { zIndex: 60 },
      }}
      className="absolute min-h-screen rounded-none border-0 bg-gmbDark p-6 text-white lg:hidden"
    >
      <div className="flex max-h-full flex-col">
        <button type="button" className="absolute right-xSm top-ySm" onClick={onClose}>
          <CloseIcon fill="#fff" className="dw-[30px] dh-[30px]" />
        </button>
        <div className="mt-20 flex w-full shrink-0 grow-0 flex-col items-center gap-yMd text-white">
          {items?.map((item, index) => (
            <Link key={index} href={`#${getAnchor(item)}`} onClick={onClose} replace>
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
    </Modal>
  )
}

export default SubmenuModal
