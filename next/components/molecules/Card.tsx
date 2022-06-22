import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { SectionItemEntityFragment } from '../../graphql'
import { hasAttributes, WithAttributes } from '../../utils/isDefined'
import { isToday } from '../../utils/isToday'
import Button from '../atoms/Button'
import Link from '../atoms/Link'

interface CardProps {
  sectionItem: WithAttributes<SectionItemEntityFragment>
  showTags?: boolean
}

export const Card = ({ sectionItem, showTags }: CardProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  const { slug, coverMedia, title, subtitle, tags, perex, dateFrom, dateTo } = sectionItem.attributes

  return (
    <article
      className="group flex min-h-full cursor-pointer flex-col space-y-yStandard"
      onClick={() => router.push(`/detail/${slug}`)}
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
            <Link href={`${router.pathname}/?tags=${tag.attributes.slug}`} key={tag.attributes.slug}>
              {tag.attributes.title}
            </Link>
          ))}
        </div>
      ) : null}

      <hgroup>
        <h3 className="text-xl">{title}</h3>
        <p className="text-xl font-regular">{subtitle}</p>
      </hgroup>

      {perex && <div className="text-md">{perex?.slice(0, 200)}…</div>}

      {/* empty div to push button to the bottom of the card */}
      <div className="m-0 hidden grow p-0 lg:block" />

      <Button href={`/detail/${slug}`} className="max-w-fit py-2 group-hover:bg-gmbDark group-hover:text-white">
        {t('common.detail')}
      </Button>
    </article>
  )
}

export default Card
