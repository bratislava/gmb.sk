import cx from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { SectionItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { hasAttributes, WithAttributes } from '../../utils/isDefined'
import { onEnterOrSpaceKeyDown } from '../../utils/onEnterOrSpaceKeyDown'
import Button from '../atoms/Button'
import Link from '../atoms/Link'

export interface ChessboardTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
  isLeft?: boolean
  showTags?: boolean
}

export const ChessboardTile = ({ sectionItem, isLeft, showTags }: ChessboardTileProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  const { slug, coverMedia, title, subtitle, tags, perex } = sectionItem.attributes

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article
      tabIndex={-1}
      onClick={() => router.push(`/detail/${slug}`)}
      onKeyDown={onEnterOrSpaceKeyDown(() => router.push(`/detail/${slug}`))}
      className={cx('relative min-h-[400px] cursor-pointer lg:flex', {
        'flex-row-reverse': isLeft,
      })}
    >
      <div className="relative h-[300px] w-full bg-gmbLightGray lg:h-auto lg:w-1/2">
        {coverMedia?.data?.attributes ? (
          <Image
            src={coverMedia.data.attributes.url}
            alt={coverMedia.data.attributes.alternativeText ?? ''}
            layout="fill"
            objectFit="cover"
            unoptimized
          />
        ) : null}
      </div>
      <div
        className="flex w-full flex-1 flex-col items-start space-y-yMd px-xMd py-yMd lg:w-1/2"
        style={{ background: getContentPageColor(sectionItem) }}
      >
        <div>
          <h3 className="text-xl">{title}</h3>
          <p className="text-xl font-regular">{subtitle}</p>
        </div>

        {showTags && tags && (
          <div className="flex space-x-3">
            {tags.data.filter(hasAttributes).map((tag) => (
              <Link role="button" href={`${router.pathname}/?tags=${tag.attributes.slug}`} key={tag.attributes.slug}>
                {tag.attributes.title}
              </Link>
            ))}
          </div>
        )}

        {/* empty div to push button to the bottom of the tile */}
        <div className="m-0 hidden grow p-0 lg:block" />

        {perex ? <div className="text-md">{perex?.slice(0, 200)}…</div> : null}

        <Button href={`/detail/${slug}`} aria-label={title}>
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default ChessboardTile
