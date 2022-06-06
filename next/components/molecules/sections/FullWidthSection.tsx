import { SectionItemFragment } from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Button from '../../atoms/Button';
import FullWidthTile from '../FulllWidthTile';
import Section from './Section';

interface FullWidthSectionProps {
  title?: string;
  sectionItems?: SectionItemFragment[];
  anchor?: string;
  loadmore?: boolean;
}

const FullWidthSection = ({
  title,
  sectionItems,
  anchor,
  loadmore,
}: FullWidthSectionProps) => {
  const { t } = useTranslation();

  return (
    <Section anchor={anchor} title={title}>
      {sectionItems?.map((item) => (
        <FullWidthTile key={item.id} sectionItem={item} />
      ))}

      {loadmore && (
        <div className="flex justify-center py-yStandard">
          <Button size="medium">{t('common.exploreMoreContent')}</Button>
        </div>
      )}
    </Section>
  );
};

export default FullWidthSection;
