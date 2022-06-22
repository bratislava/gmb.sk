import React from 'react'
import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close-x.svg'
import { getAnchor } from '../../utils/getAnchor'
import Link from '../atoms/Link'

interface ISubmenuModalProps {
  isOpen: boolean
  onClose: () => void
  items?: string[]
  filters?: React.ReactNode
}

const SubmenuModal = ({ isOpen, onClose, items, filters }: ISubmenuModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: { inset: '0' },
        overlay: { zIndex: 60 },
      }}
      className="absolute min-h-screen rounded-none border-0 bg-gmbDark p-6 text-white lg:hidden"
    >
      <button className="absolute right-6 top-6" onClick={onClose}>
        <CloseIcon fill="#fff" />
      </button>
      <div className="mt-20 flex w-full flex-col items-center gap-16 text-white">
        {items?.map((item, index) => (
          <Link key={index} href={`#${getAnchor(item)}`} onClick={onClose} replace>
            {item}
          </Link>
        ))}
      </div>
      {filters}
    </Modal>
  )
}

export default SubmenuModal
