import { useTranslation } from 'next-i18next'

import Button from '@/components/atoms/Button'
import Link from '@/components/atoms/Link'
import { NewsItemEntityFragment } from '@/graphql'
import { getContentPageColor } from '@/utils/getContentPageColor'
import { WithAttributes } from '@/utils/isDefined'

interface NewsBarProps {
  newsItem: WithAttributes<NewsItemEntityFragment>
}

const NewsBar = ({ newsItem }: NewsBarProps) => {
  const { t } = useTranslation()

  return (
    <div
      className="group relative flex items-center justify-between px-xMd py-yMd"
      style={{ background: getContentPageColor(newsItem) }}
    >
      <Link
        href={`/detail/${newsItem.attributes.slug}`}
        stretched
        preserveStyle
        className="hover:no-underline"
      >
        <h3 className="whitespace-pre-wrap text-xl">{newsItem.attributes.title}</h3>
        <p className="whitespace-pre-wrap text-xl font-regular">{newsItem.attributes.subtitle}</p>
      </Link>

      <div className="hidden lg:block">
        <Button tabIndex={-1} groupHover>
          {t('common.detail')}
        </Button>
      </div>
    </div>
  )
}

export default NewsBar
