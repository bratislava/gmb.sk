import { useTranslation } from 'next-i18next'
import React from 'react'

import { SectionItemEntityFragment } from '../../../graphql'
import { WithAttributes } from '../../../utils/isDefined'
import Button from '../../atoms/Button'
import ChessboardTile from '../ChessboardTile'
import Section from './Section'

interface ChessboardProps {
  title?: string
  sectionItems?: WithAttributes<SectionItemEntityFragment>[]
  anchor?: string
  flipped?: boolean
  showTags?: boolean
  loadmore?: boolean
}

const ChessboardSection = ({ title, sectionItems, anchor, flipped, showTags, loadmore }: ChessboardProps) => {
  const { t } = useTranslation()

  return (
    <Section anchor={anchor} title={title}>
      {sectionItems?.length ? (
        <>
          {sectionItems.map((item, i) => (
            <ChessboardTile
              sectionItem={item}
              isLeft={flipped ? i % 2 !== 1 : i % 2 !== 0}
              key={item.attributes.slug}
              showTags={showTags}
            />
          ))}

          {loadmore && (
            <div className="mt-28 flex justify-center">
              <Button size="medium">{t('common.moreExhibitions')}</Button>
            </div>
          )}
        </>
      ) : (
        <div className="relative py-yStandard px-xStandard">
          <p className="text-md">{t('common.nothingToShow')}</p>
        </div>
      )}
    </Section>
  )
}

export default ChessboardSection
