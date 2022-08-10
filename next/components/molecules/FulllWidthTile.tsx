import { uniqueId } from 'lodash'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import { SectionItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { WithAttributes } from '../../utils/isDefined'
import Button from '../atoms/Button'

export interface IFullWidthTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
}

export const FullWidthTile = ({ sectionItem }: IFullWidthTileProps) => {
  const { t } = useTranslation()

  const [ariaLabelId] = useState(uniqueId(sectionItem.attributes.title))

  return (
    <article className="w-full cursor-pointer">
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
        className="flex w-full flex-col items-start justify-between px-xMd py-yMd"
        style={{ background: getContentPageColor(sectionItem) }}
      >
        <hgroup>
          <h3 className="text-xl" id={ariaLabelId}>
            {sectionItem.attributes.title}
          </h3>
          <p className="pb-yMd text-xl font-regular">{sectionItem.attributes.subtitle}</p>
        </hgroup>

        <Button
          href={`/detail/${sectionItem.attributes.slug}`}
          aria-labelledby={ariaLabelId}
          className="after:absolute after:inset-0"
        >
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default FullWidthTile
