import React from 'react';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-x.svg';
import { getAnchor } from '../../utils/getAnchor';
import Link from '../atoms/Link';

interface ISubmenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  items?: string[];
  filters?: React.ReactNode;
}

const SubmenuModal = ({
  isOpen,
  onClose,
  items,
  filters,
}: ISubmenuModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: { inset: '0' },
        overlay: { zIndex: 60 },
      }}
      className="absolute min-h-screen p-6 text-white border-0 rounded-none bg-gmbDark lg:hidden"
    >
      <button className="absolute right-6 top-6" onClick={onClose}>
        <CloseIcon fill="#fff" />
      </button>
      <div className="flex flex-col items-center w-full gap-16 mt-20 text-white">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={`#${getAnchor(item)}`}
            onClick={onClose}
            replace
          >
            {item}
          </Link>
        ))}
      </div>
      {filters}
    </Modal>
  );
};

export default SubmenuModal;
