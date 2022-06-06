import { SectionItemFragment } from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { getContentPageColor } from '../../utils/getContentPageColor';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

export interface IFullWidthTileProps {
  sectionItem: SectionItemFragment;
}

export const FullWidthTile = ({ sectionItem }: IFullWidthTileProps) => {
  const { t } = useTranslation();

  return (
    <Link href={`/detail/${sectionItem.slug}`} preserveStyle noUnderline>
      <article className="w-full group">
        <div className="flex items-center justify-center w-full h-screen overflow-hidden lg:h-full">
          {sectionItem?.coverMedia?.url && (
            <img
              src={sectionItem.coverMedia.url}
              alt={sectionItem.coverMedia.alternativeText ?? ''}
              className="object-cover min-w-full min-h-full"
            />
          )}
        </div>

        <div
          className="flex flex-col items-start justify-between w-full px-xStandard py-yStandard"
          style={{ background: getContentPageColor(sectionItem) }}
        >
          <hgroup>
            <h3 className="text-xl">{sectionItem?.title}</h3>
            <p className="text-xl font-regular pb-yStandard">
              {sectionItem?.subtitle}
            </p>
          </hgroup>

          <Button
            // href={`/detail/${sectionItem.slug}`}
            className="group-hover:bg-gmbDark group-hover:text-white"
          >
            {t('common.detail')}
          </Button>
        </div>
      </article>
    </Link>
  );
};

export default FullWidthTile;
