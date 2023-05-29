import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useId } from 'react'

import { SectionItemEntityFragment } from '../../../graphql'
import { formatDateString } from '../../../utils/formatDateString'
import { generateImageSizes } from '../../../utils/generateImageSizes'
import { hasAttributes, WithAttributes } from '../../../utils/isDefined'
import { isToday } from '../../../utils/isToday'
import Button from '../../atoms/Button'
import Link from '../../atoms/Link'
import Subtitle from '../../atoms/Subtitle'

interface CardProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
  showTags?: boolean
}

const Card = ({ sectionItem, showTags }: CardProps) => {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const titleId = useId()

  const { slug, coverMedia, title, tags, perex, addedAt, dateFrom, dateTo } = sectionItem.attributes

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article className="relative flex min-h-full flex-col gap-y-yMd">
      <div className="relative aspect-4/3 overflow-hidden bg-gmbLightGray">
        {coverMedia?.data?.attributes ? (
          <Image
            src={coverMedia.data.attributes.url}
            alt=""
            className="object-cover"
            fill
            sizes={generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })}
          />
        ) : null}
      </div>

      {showTags && tags ? (
        <div className="flex gap-6">
          {isToday({
            dateFrom: dateFrom as string,
            dateTo: dateTo as string,
          }) && <span className="pr-2 text-nav uppercase text-red-600">{t('common.today')}!</span>}
          <div className="z-[1] flex grow flex-wrap gap-x-6 gap-y-3">
            {tags?.data.filter(hasAttributes).map((tag) => (
              <Link
                className=""
                role="button"
                href={`${router.pathname}/?tags=${tag.attributes.slug}`}
                key={tag.attributes.slug}
              >
                {tag.attributes.title}
              </Link>
            ))}
          </div>
          {addedAt && <div className="shrink-0 text-btn text-gmbGray">{formatDateString(addedAt, i18n.language)}</div>}
        </div>
      ) : null}

      <div id={titleId} className="grow">
        <h3 className="text-xl">{title}</h3>
        <p className="text-xl font-regular">
          <Subtitle page={sectionItem} />
        </p>
      </div>

      {perex && <div className="line-clamp-5 text-md">{perex}</div>}

      <Button href={`/detail/${slug}`} stretched aria-labelledby={titleId} className="max-w-fit">
        {t('common.detail')}
      </Button>
    </article>
  )
}

export default Card
