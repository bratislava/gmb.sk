import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { SectionItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { WithAttributes } from '../../utils/isDefined'
import { onEnterOrSpaceKeyDown } from '../../utils/onEnterOrSpaceKeyDown'
import Button from '../atoms/Button'

export interface IFullWidthTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
}

export const FullWidthTile = ({ sectionItem }: IFullWidthTileProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article
      tabIndex={-1}
      onClick={() => router.push(`/detail/${sectionItem.attributes.slug}`)}
      onKeyDown={onEnterOrSpaceKeyDown(() => router.push(`/detail/${sectionItem.attributes.slug}`))}
      className="w-full cursor-pointer"
    >
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
        <div>
          <h3 className="text-xl">{sectionItem.attributes.title}</h3>
          <p className="pb-yMd text-xl font-regular">{sectionItem.attributes.subtitle}</p>
        </div>

        <Button href={`/detail/${sectionItem.attributes.slug}`} aria-label={sectionItem.attributes.title}>
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default FullWidthTile
