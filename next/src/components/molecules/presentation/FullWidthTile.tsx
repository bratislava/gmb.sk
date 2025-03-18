import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useId } from 'react'

import Button from '@/src/components/atoms/Button'
import Subtitle from '@/src/components/atoms/Subtitle'
import { SectionItemEntityFragment } from '@/src/services/graphql'
import { generateImageSizes } from '@/src/utils/generateImageSizes'
import { getContentPageColor } from '@/src/utils/getContentPageColor'
import { WithAttributes } from '@/src/utils/isDefined'

interface IFullWidthTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
}

const FullWidthTile = ({ sectionItem }: IFullWidthTileProps) => {
  const { t } = useTranslation()
  const titleId = useId()

  const { slug, coverMedia, title } = sectionItem.attributes

  return (
    <article className="relative h-auto w-full">
      <div className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden lg:h-full">
        {coverMedia?.data?.attributes?.url && (
          <Image
            src={coverMedia.data.attributes.url}
            alt=""
            className="object-cover"
            fill
            sizes={generateImageSizes({ default: '100w' })}
          />
        )}
      </div>

      <div
        className="flex w-full flex-col items-start justify-between px-xMd py-yMd"
        style={{ background: getContentPageColor(sectionItem) }}
      >
        <div id={titleId}>
          <h3 className="text-xl">{title}</h3>
          <p className="pb-yMd text-xl font-regular">
            <Subtitle page={sectionItem} />
          </p>
        </div>

        <Button href={`/detail/${slug}`} stretched aria-labelledby={titleId}>
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default FullWidthTile
