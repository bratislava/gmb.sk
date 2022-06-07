import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  return (
    <article
      className="w-full cursor-pointer group"
      onClick={() => router.push(`/detail/${sectionItem.attributes.slug}`)}
    >
      <div className="flex items-center justify-center w-full h-screen overflow-hidden lg:h-full">
        {sectionItem.attributes.coverMedia?.data?.attributes?.url && (
          <img
            src={sectionItem.attributes.coverMedia.data.attributes.url}
            alt={sectionItem.attributes.coverMedia.data.attributes.alternativeText ?? ''}
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
          <p className="text-xl font-regular pb-yStandard">{sectionItem.attributes.subtitle}</p>
        </hgroup>

        <Button
          href={`/detail/${sectionItem.attributes.slug}`}
          className="group-hover:bg-gmbDark group-hover:text-white"
        >
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default FullWidthTile
