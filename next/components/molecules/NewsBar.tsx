import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { NewsItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { WithAttributes } from '../../utils/isDefined'
import { onEnterOrSpaceKeyDown } from '../../utils/onEnterOrSpaceKeyDown'
import Button from '../atoms/Button'

interface NewsBarProps {
  newsItem: WithAttributes<NewsItemEntityFragment>
}

const NewsBar = ({ newsItem }: NewsBarProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div
      className="relative flex cursor-pointer items-center justify-between px-xMd py-yMd"
      style={{ background: getContentPageColor(newsItem) }}
      role="link"
      tabIndex={0}
      aria-label={newsItem.attributes.title}
      onClick={() => router.push(`/detail/${newsItem.attributes.slug}`)}
      onKeyDown={onEnterOrSpaceKeyDown(() => router.push(`/detail/${newsItem.attributes.slug}`))}
    >
      <div>
        <h3 className="whitespace-pre-wrap text-xl">{newsItem.attributes.title}</h3>
        <p className="whitespace-pre-wrap text-xl font-regular">{newsItem.attributes.subtitle}</p>
      </div>

      <div className="hidden lg:block">
        <Button href={`/detail/${newsItem.attributes.slug}`} tabIndex={-1} aria-label={newsItem.attributes.title}>
          {t('common.detail')}
        </Button>
      </div>
    </div>
  )
}

export default NewsBar
