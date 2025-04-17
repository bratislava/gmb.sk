import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'

import Card from '@/src/components/molecules/presentation/Card'
import CardSkeleton from '@/src/components/molecules/presentation/CardSkeleton'
import Section from '@/src/components/molecules/sections/Section'
import { SectionItemEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

interface CardsSectionProps {
  title?: string
  sectionItems?: WithAttributes<SectionItemEntityFragment>[]
  anchor?: string
  showTags?: boolean
  isLoading?: boolean
  loadmoreButton?: ReactNode
  noItemsMessage?: string
}

const CardSection = ({
  title,
  sectionItems,
  anchor,
  showTags,
  isLoading,
  loadmoreButton,
  noItemsMessage,
}: CardsSectionProps) => {
  const { t } = useTranslation()

  return (
    <Section anchor={anchor} title={title}>
      {isLoading ? (
        <div
          className={cx(
            'grid grid-cols-1 gap-x-6 gap-y-14 px-xMd md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10',
            { 'py-yLg': !title, 'pb-yLg': title }
          )}
        >
          {[1, 2, 3].map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : sectionItems?.length ? (
        <>
          {/* Cards list */}
          <ul
            className={cx(
              'grid grid-cols-1 gap-x-6 gap-y-14 px-xMd md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10',
              { 'py-yLg': !title, 'pb-yLg': title }
            )}
          >
            {sectionItems.map((item) => (
              <li key={item.attributes.slug}>
                <Card sectionItem={item} showTags={showTags} />
              </li>
            ))}
          </ul>

          {loadmoreButton && <div className="flex justify-center py-12">{loadmoreButton}</div>}
        </>
      ) : (
        <div className="relative px-xMd pb-[calc(var(--padding-y)+40px)] pt-yMd">
          <p className="text-md">{noItemsMessage ?? t('common.nothingToShow')}</p>
        </div>
      )}
    </Section>
  )
}

export default CardSection
