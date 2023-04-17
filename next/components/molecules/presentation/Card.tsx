import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useId } from 'react'

import { SectionItemEntityFragment } from '../../../graphql'
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
  const { t } = useTranslation()
  const router = useRouter()
  const titleId = useId()

  const { slug, coverMedia, title, tags, perex, dateFrom, dateTo } = sectionItem.attributes

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article className="relative flex min-h-full flex-col space-y-yMd">
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
        <div className="flex flex-wrap gap-6">
          {isToday({
            dateFrom: dateFrom as string,
            dateTo: dateTo as string,
          }) && <span className="pr-2 text-nav uppercase text-red-600">{t('common.today')}!</span>}
          <div className="z-[1] flex flex-wrap gap-6">
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
        </div>
      ) : null}

      <div id={titleId}>
        <h3 className="text-xl">{title}</h3>
        <p className="text-xl font-regular">
          <Subtitle page={sectionItem} />
        </p>
      </div>

      {/* empty div to push button to the bottom of the card */}
      <div className="m-0 hidden grow p-0 lg:block" />

      {perex && <div className="text-md line-clamp-5">{perex}</div>}

      <Button href={`/detail/${slug}`} stretched aria-labelledby={titleId} className="max-w-fit">
        {t('common.detail')}
      </Button>
    </article>
  )
}

export default Card
