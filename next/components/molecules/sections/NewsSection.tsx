import { useTranslation } from 'next-i18next'
import React from 'react'

import { NewsItemEntityFragment } from '../../../graphql'
import { WithAttributes } from '../../../utils/isDefined'
import NewsBar from '../NewsBar'
import Section from './Section'

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
        <div className="relative py-yStandard px-xStandard">
          <p className="text-md">{t('common.nothingToShow')}</p>
        </div>
      )}
    </Section>
  )
}

export default NewsSection
