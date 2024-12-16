import { useTranslation } from 'next-i18next'

import Button from '@/components/atoms/Button'
import ChessboardTile from '@/components/molecules/presentation/ChessboardTile'
import Section from '@/components/molecules/sections/Section'
import { SectionItemEntityFragment } from '@/graphql'
import { WithAttributes } from '@/utils/isDefined'

interface ChessboardProps {
  title?: string
  sectionItems?: WithAttributes<SectionItemEntityFragment>[]
  anchor?: string
  flipped?: boolean
  showTags?: boolean
  loadmore?: boolean
}

const ChessboardSection = ({
  title,
  sectionItems,
  anchor,
  flipped,
  showTags,
  loadmore,
}: ChessboardProps) => {
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
        <div className="relative px-xMd py-yMd">
          <p className="pb-yMd text-md">{t('common.nothingToShow')}</p>
        </div>
      )}
    </Section>
  )
}

export default ChessboardSection
