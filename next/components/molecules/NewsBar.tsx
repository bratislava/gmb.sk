import { useTranslation } from 'next-i18next';
import React from 'react';
import { NewsItemEntityFragment } from '../../graphql';
import { getContentPageColor } from '../../utils/getContentPageColor';
import { WithAttributes } from '../../utils/isDefined';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

interface NewsBarProps {
  newsItem: WithAttributes<NewsItemEntityFragment>;
}

export const NewsBar = ({ newsItem }: NewsBarProps) => {
  const { t } = useTranslation();

  return (
    <Link
      href={`/detail/${newsItem.attributes.slug}`}
      preserveStyle
      noUnderline
    >
      <article
        className={
          'px-xStandard py-yStandard flex justify-between items-center group'
        }
        style={{ background: getContentPageColor(newsItem) }}
      >
        <hgroup>
          <h3 className="text-xl whitespace-pre-wrap">
            {newsItem.attributes.title}
          </h3>
          <p className="text-xl whitespace-pre-wrap font-regular">
            {newsItem.attributes.subtitle}
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
