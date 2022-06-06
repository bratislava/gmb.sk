import { NewsItemFragment } from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import React from 'react';
import NewsBar from '../NewsBar';
import Section from './Section';

interface NewsProps {
  items: NewsItemFragment[];
  title?: string;
  anchor?: string;
}

const NewsSection = ({ items, title, anchor }: NewsProps) => {
  const { t } = useTranslation();

  return (
    <Section anchor={anchor} title={title}>
      {items.length ? (
        <>
          {items.map((item) => (
            <NewsBar key={item.id} newsItem={item} />
          ))}
        </>
      ) : (
        <div className="relative py-yStandard px-xStandard">
          <p className="text-md">{t('common.nothingToShow')}</p>
        </div>
      )}
    </Section>
  );
};

export default NewsSection;
