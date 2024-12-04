import { useTranslation } from 'next-i18next'

import NewsBar from '@/components/molecules/presentation/NewsBar'
import Section from '@/components/molecules/sections/Section'
import { NewsItemEntityFragment } from '@/graphql'
import { WithAttributes } from '@/utils/isDefined'

interface NewsProps {
  items: WithAttributes<NewsItemEntityFragment>[]
  title?: string
  anchor?: string
}

const NewsSection = ({ items, title, anchor }: NewsProps) => {
  const { t } = useTranslation()

  return (
    <Section anchor={anchor} title={title}>
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <NewsBar key={item.attributes?.slug} newsItem={item} />
          ))}
        </>
      ) : (
        <div className="relative px-xMd py-yMd">
          <p className="pb-yMd text-md">{t('common.nothingToShow')}</p>
        </div>
      )}
    </Section>
  )
}

export default NewsSection
