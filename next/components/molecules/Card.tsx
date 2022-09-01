import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { SectionItemEntityFragment } from '../../graphql'
import { hasAttributes, WithAttributes } from '../../utils/isDefined'
import { isToday } from '../../utils/isToday'
import { onEnterOrSpaceKeyDown } from '../../utils/onEnterOrSpaceKeyDown'
import Button from '../atoms/Button'
import Link from '../atoms/Link'

interface CardProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
  showTags?: boolean
}

const Card = ({ sectionItem, showTags }: CardProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  const { slug, coverMedia, title, subtitle, tags, perex, dateFrom, dateTo } = sectionItem.attributes

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article
      tabIndex={-1}
      onClick={() => router.push(`/detail/${slug}`)}
      onKeyDown={onEnterOrSpaceKeyDown(() => router.push(`/detail/${slug}`))}
      className="group relative flex min-h-full cursor-pointer flex-col space-y-yMd"
    >
      <div className="overflow-hidden bg-gmbLightGray">
        {coverMedia?.data?.attributes ? (
          <Image
            src={coverMedia.data.attributes.url}
            alt={coverMedia.data.attributes.alternativeText ?? undefined}
            height="458px"
            width="580px"
            objectFit="cover"
            layout="responsive"
            unoptimized
          />
        ) : null}
      </div>

      {showTags && tags ? (
        <div className="flex flex-wrap gap-6">
          {isToday({
            dateFrom: dateFrom as string,
            dateTo: dateTo as string,
          }) && <span className="pr-3 text-nav uppercase text-red-600">{t('common.today')}!</span>}
          {tags?.data.filter(hasAttributes).map((tag) => (
            <Link role="button" href={`${router.pathname}/?tags=${tag.attributes.slug}`} key={tag.attributes.slug}>
              {tag.attributes.title}
            </Link>
          ))}
        </div>
      ) : null}

      <div>
        <h3 className="text-xl">{title}</h3>
        <p className="text-xl font-regular">{subtitle}</p>
      </div>

      {/* empty div to push button to the bottom of the card */}
      <div className="m-0 hidden grow p-0 lg:block" />

      {perex && <div className="text-md line-clamp-5">{perex}</div>}

      <Button href={`/detail/${slug}`} aria-label={title} className="max-w-fit">
        {t('common.detail')}
      </Button>
    </article>
  )
}

export default Card
