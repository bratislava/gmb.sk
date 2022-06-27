import { useTranslation } from 'next-i18next'
import React from 'react'

import { SectionItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { WithAttributes } from '../../utils/isDefined'
import Button from '../atoms/Button'

export interface IFullWidthTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
}

export const FullWidthTile = ({ sectionItem }: IFullWidthTileProps) => {
  const { t } = useTranslation()

  return (
    <article className="group w-full cursor-pointer">
      <div className="flex h-screen w-full items-center justify-center overflow-hidden lg:h-full">
        {sectionItem.attributes.coverMedia?.data?.attributes?.url && (
          <img
            src={sectionItem.attributes.coverMedia.data.attributes.url}
            alt={sectionItem.attributes.coverMedia.data.attributes.alternativeText ?? ''}
            className="min-h-full min-w-full object-cover"
          />
        )}
      </div>

      <div
        className="flex w-full flex-col items-start justify-between px-xStandard py-yStandard"
        style={{ background: getContentPageColor(sectionItem) }}
      >
        <hgroup>
          <h3 className="text-xl">{sectionItem.attributes.title}</h3>
          <p className="pb-yStandard text-xl font-regular">{sectionItem.attributes.subtitle}</p>
        </hgroup>

        <Button
          href={`/detail/${sectionItem.attributes.slug}`}
          className="group-hover:bg-gmbDark group-hover:text-white "
        >
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default FullWidthTile
