import { useTranslation } from 'next-i18next';
import React from 'react';
import { SectionItemEntityFragment } from '../../graphql';
import { getContentPageColor } from '../../utils/getContentPageColor';
import { WithAttributes } from '../../utils/isDefined';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

export interface IFullWidthTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>;
}

export const FullWidthTile = ({ sectionItem }: IFullWidthTileProps) => {
  const { t } = useTranslation();

  return (
    <Link
      href={`/detail/${sectionItem.attributes.slug}`}
      preserveStyle
      noUnderline
    >
      <article className="w-full group">
        <div className="flex items-center justify-center w-full h-screen overflow-hidden lg:h-full">
          {sectionItem.attributes.coverMedia?.data?.attributes?.url && (
            <img
              src={sectionItem.attributes.coverMedia.data.attributes.url}
              alt={
                sectionItem.attributes.coverMedia.data.attributes
                  .alternativeText ?? ''
              }
              className="object-cover min-w-full min-h-full"
            />
          )}
        </div>

        <div
          className="flex flex-col items-start justify-between w-full px-xStandard py-yStandard"
          style={{ background: getContentPageColor(sectionItem) }}
        >
          <hgroup>
            <h3 className="text-xl">{sectionItem.attributes.title}</h3>
            <p className="text-xl font-regular pb-yStandard">
              {sectionItem.attributes.subtitle}
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
