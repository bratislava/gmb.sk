import { useTranslation } from 'next-i18next'

import { NewsItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { WithAttributes } from '../../utils/isDefined'
import Button from '../atoms/Button'

interface NewsBarProps {
  newsItem: WithAttributes<NewsItemEntityFragment>
}

export const NewsBar = ({ newsItem }: NewsBarProps) => {
  const { t } = useTranslation()

  return (
    <article
      className="group relative flex cursor-pointer items-center justify-between px-xMd py-yMd"
      style={{ background: getContentPageColor(newsItem) }}
    >
      <hgroup>
        <h3 className="whitespace-pre-wrap text-xl">{newsItem.attributes.title}</h3>
        <p className="whitespace-pre-wrap text-xl font-regular">{newsItem.attributes.subtitle}</p>
      </hgroup>

      <div className="hidden lg:block">
        <Button
          href={`/detail/${newsItem.attributes.slug}`}
          className="after:absolute after:inset-0 group-hover:bg-gmbDark group-hover:text-white"
        >
          {t('common.detail')}
        </Button>
      </div>
    </article>
  )
}

export default NewsBar
