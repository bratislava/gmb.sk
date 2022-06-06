import { NewsItemFragment } from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { getContentPageColor } from '../../utils/getContentPageColor';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

interface NewsBarProps {
  newsItem: NewsItemFragment;
}

export const NewsBar = ({ newsItem }: NewsBarProps) => {
  const { t } = useTranslation();

  return (
    <Link href={`/detail/${newsItem.slug}`} preserveStyle noUnderline>
      <article
        className={`px-xStandard py-yStandard flex justify-between items-center group`}
        style={{ background: getContentPageColor(newsItem) }}
      >
        <hgroup>
          <h3 className="text-xl whitespace-pre-wrap">{newsItem.title}</h3>
          <p className="text-xl whitespace-pre-wrap font-regular">
            {newsItem.subtitle}
          </p>
        </hgroup>

        <div className="hidden lg:block">
          <Button
            // href={`detail/${data.slug}`}
            className="group-hover:text-white group-hover:bg-gmbDark"
          >
            {t('common.detail')}
          </Button>
        </div>
      </article>
    </Link>
  );
};

export default NewsBar;
