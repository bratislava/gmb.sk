import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { SectionItemEntityFragment } from '../../../graphql'
import { WithAttributes } from '../../../utils/isDefined'
import Card from '../Card'
import CardSkeleton from '../CardSkeleton'
import Section from './Section'
interface CardsSectionProps {
  title?: string
  sectionItems?: WithAttributes<SectionItemEntityFragment>[]
  anchor?: string
  showTags?: boolean
  isLoading?: boolean
  loadmoreButton?: React.ReactNode
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
          className={cx('grid px-xStandard grid-cols-1 gap-x-6 lg:gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3', {
            'py-yHigh': !title,
            'pb-yHigh': title,
          })}
        >
          {[1, 2, 3].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : sectionItems?.length ? (
        <>
          <div
            className={cx('grid px-xStandard grid-cols-1 gap-x-6 lg:gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3', {
              'py-yHigh': !title,
              'pb-yHigh': title,
            })}
          >
            {sectionItems.map((item) => (
              <Card key={item.attributes.slug} sectionItem={item} showTags={showTags} />
            ))}
          </div>

          {loadmoreButton && <div className="flex justify-center py-12">{loadmoreButton}</div>}
        </>
      ) : (
        <div className="relative px-xStandard pt-yStandard pb-[calc(var(--padding-y)+40px)]">
          <p className="text-md">{noItemsMessage ?? t('common.nothingToShow')}</p>
        </div>
      )}
    </Section>
  )
}

export default CardSection
