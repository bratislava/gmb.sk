import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import { NewsItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { WithAttributes } from '../../utils/isDefined'
import Button from '../atoms/Button'

interface NewsBarProps {
  newsItem: WithAttributes<NewsItemEntityFragment>
}

export const NewsBar = ({ newsItem }: NewsBarProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <article
      className={'px-xStandard py-yStandard flex justify-between items-center group cursor-pointer'}
      style={{ background: getContentPageColor(newsItem) }}
      onClick={() => router.push(`/detail/${newsItem.attributes.slug}`)}
    >
      <hgroup>
        <h3 className="text-xl whitespace-pre-wrap">{newsItem.attributes.title}</h3>
        <p className="text-xl whitespace-pre-wrap font-regular">{newsItem.attributes.subtitle}</p>
      </hgroup>

      <div className="hidden lg:block">
        <Button href={`/detail/${newsItem.attributes.slug}`} className="group-hover:text-white group-hover:bg-gmbDark">
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default NewsBar
