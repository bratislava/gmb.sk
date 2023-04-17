import { useTranslation } from 'next-i18next'
import { useId } from 'react'

import { SectionItemEntityFragment } from '../../../graphql'
import { getContentPageColor } from '../../../utils/getContentPageColor'
import { WithAttributes } from '../../../utils/isDefined'
import Button from '../../atoms/Button'
import Subtitle from '../../atoms/Subtitle'

interface IFullWidthTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
}

const FullWidthTile = ({ sectionItem }: IFullWidthTileProps) => {
  const { t } = useTranslation()
  const titleId = useId()

  const { slug, coverMedia, title } = sectionItem.attributes

  return (
    <article className="relative w-full">
      <div className="flex h-screen w-full items-center justify-center overflow-hidden lg:h-full">
        {coverMedia?.data?.attributes?.url && (
          <img
            src={coverMedia.data.attributes.url}
            alt={coverMedia.data.attributes.alternativeText ?? ''}
            className="min-h-full min-w-full object-cover"
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
