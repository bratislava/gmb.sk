import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { SectionItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { WithAttributes } from '../../utils/isDefined'
import { onEnterOrSpaceKeyDown } from '../../utils/onEnterOrSpaceKeyDown'
import Button from '../atoms/Button'
import Subtitle from '../atoms/Subtitle'

export interface IFullWidthTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
}

export const FullWidthTile = ({ sectionItem }: IFullWidthTileProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  const { slug, coverMedia, title } = sectionItem.attributes

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article
      tabIndex={-1}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => router.push(`/detail/${slug}`)}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onKeyDown={onEnterOrSpaceKeyDown(() => router.push(`/detail/${slug}`))}
      className="w-full cursor-pointer"
    >
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
        <div>
          <h3 className="text-xl">{title}</h3>
          <p className="pb-yMd text-xl font-regular">
            <Subtitle page={sectionItem} />
          </p>
        </div>

        <Button href={`/detail/${slug}`} aria-label={title}>
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default FullWidthTile
