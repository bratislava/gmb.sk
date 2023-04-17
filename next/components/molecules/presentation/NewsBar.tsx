import { useTranslation } from 'next-i18next'
import { useId } from 'react'

import { NewsItemEntityFragment } from '../../../graphql'
import { getContentPageColor } from '../../../utils/getContentPageColor'
import { WithAttributes } from '../../../utils/isDefined'
import Button from '../../atoms/Button'

interface NewsBarProps {
  newsItem: WithAttributes<NewsItemEntityFragment>
}

const NewsBar = ({ newsItem }: NewsBarProps) => {
  const { t } = useTranslation()
  const titleId = useId()

  return (
    <div
      className="relative flex items-center justify-between px-xMd py-yMd"
      style={{ background: getContentPageColor(newsItem) }}
    >
      <div id={titleId}>
        <h3 className="whitespace-pre-wrap text-xl">{newsItem.attributes.title}</h3>
        <p className="whitespace-pre-wrap text-xl font-regular">{newsItem.attributes.subtitle}</p>
      </div>

      <div className="hidden lg:block">
        <Button href={`/detail/${newsItem.attributes.slug}`} stretched aria-labelledby={titleId}>
          {t('common.detail')}
        </Button>
      </div>
    </div>
  )
}

export default NewsBar
