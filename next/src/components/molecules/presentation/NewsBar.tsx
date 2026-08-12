import { useTranslation } from 'next-i18next/pages'

import Button from '@/src/components/atoms/Button'
import Link from '@/src/components/atoms/Link'
import { NewsItemEntityFragment } from '@/src/services/graphql'
import { getContentPageColor } from '@/src/utils/getContentPageColor'

interface NewsBarProps {
  newsItem: NewsItemEntityFragment
}

const NewsBar = ({ newsItem }: NewsBarProps) => {
  const { t } = useTranslation()

  return (
    <div
      className="group relative flex items-center justify-between px-xMd py-yMd"
      style={{ background: getContentPageColor(newsItem) }}
    >
      <Link
        href={`/detail/${newsItem.slug}`}
        stretched
        preserveStyle
        className="hover:no-underline"
      >
        <h3 className="text-xl whitespace-pre-wrap">{newsItem.title}</h3>
        <p className="text-xl font-regular whitespace-pre-wrap">{newsItem.subtitle}</p>
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
