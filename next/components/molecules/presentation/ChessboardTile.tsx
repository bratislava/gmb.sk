import cx from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useId } from 'react'

import { SectionItemEntityFragment } from '../../../graphql'
import { generateImageSizes } from '../../../utils/generateImageSizes'
import { getContentPageColor } from '../../../utils/getContentPageColor'
import { hasAttributes, WithAttributes } from '../../../utils/isDefined'
import Button from '../../atoms/Button'
import Link from '../../atoms/Link'
import Subtitle from '../../atoms/Subtitle'

interface ChessboardTileProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
  isLeft?: boolean
  showTags?: boolean
}

const ChessboardTile = ({ sectionItem, isLeft, showTags }: ChessboardTileProps) => {
  const { t } = useTranslation()
  const router = useRouter()
  const titleId = useId()

  const { slug, coverMedia, title, tags, perex } = sectionItem.attributes

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article
      className={cx('relative min-h-chessboardTile lg:flex', {
        'flex-row-reverse': isLeft,
      })}
    >
      <div className="relative min-h-chessboardTile w-full bg-gmbLightGray lg:h-auto lg:w-1/2">
        {coverMedia?.data?.attributes ? (
          <Image
            src={coverMedia.data.attributes.url}
            alt=""
            fill
            className="object-cover"
            sizes={generateImageSizes({ default: '100vw', lg: '50vw' })}
          />
        ) : null}
      </div>
      <div
        className="flex w-full flex-1 flex-col items-start space-y-yMd px-xMd py-yMd lg:w-1/2"
        style={{ background: getContentPageColor(sectionItem) }}
      >
        <div id={titleId}>
          <h3 className="text-xl">{title}</h3>
          <p className="text-xl font-regular">
            <Subtitle page={sectionItem} />
          </p>
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

        {perex ? <div className="text-md line-clamp-3">{perex}</div> : null}

        <Button href={`/detail/${slug}`} stretched aria-labelledby={titleId}>
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default ChessboardTile
