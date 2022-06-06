import cx from 'classnames';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icons/chevron-down.svg';
import { getAnchor } from '../../utils/getAnchor';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import SubmenuModal from './SubmenuModal';

interface SubmenuProps {
  items?: string[];
  button?: React.ReactNode;
  filters?: React.ReactNode;
}

export const Submenu = ({ items, filters }: SubmenuProps) => {
  const { t } = useTranslation();

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  if ((!items || items.length === 0) && !filters) {
    return null;
  }

  return (
    <>
      {/* Desktop submenu */}
      <div className="relative flex-col hidden w-full py-12 text-white 3xl:py-16 px-xStandard lg:flex bg-gmbDark">
        <div className="flex justify-between w-full">
          <div className="hidden gap-10 lg:flex">
            {items?.map((item, index) => (
              <Link key={index} href={`#${getAnchor(item)}`} replace>
                {item}
              </Link>
            ))}
          </div>
          <div className="">
            {filters && (
              <Button
                size="link"
                color="light"
                className="flex items-center gap-2 text-nav"
                onClick={() => {
                  setFilterOpen((prev) => !prev);
                }}
              >
                {t('common.filter')} <ArrowDown />
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
          setModalOpen((prev) => !prev);
        }}
        className="relative flex items-center justify-between w-full text-white uppercase py-yStandard px-xStandard text-md bg-gmbDark lg:hidden"
      >
        {t('common.quickNavigation')}
        <ArrowDown />
      </div>

      <SubmenuModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        items={items}
        filters={filters}
      />
    </>
  );
};

export default Submenu;
