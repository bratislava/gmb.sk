import { useTranslation } from 'next-i18next';
import React from 'react';
import { SectionItemEntityFragment } from '../../../graphql';
import { WithAttributes } from '../../../utils/isDefined';
import Button from '../../atoms/Button';
import FullWidthTile from '../FulllWidthTile';
import Section from './Section';

interface FullWidthSectionProps {
  title?: string;
  sectionItems?: WithAttributes<SectionItemEntityFragment>[];
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
        <FullWidthTile key={item.attributes.slug} sectionItem={item} />
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
