import { useTranslation } from 'next-i18next'

import Button from '@/components/atoms/Button'
import FullWidthTile from '@/components/molecules/presentation/FullWidthTile'
import Section from '@/components/molecules/sections/Section'
import { SectionItemEntityFragment } from '@/graphql'
import { WithAttributes } from '@/utils/isDefined'

interface FullWidthSectionProps {
  title?: string
  sectionItems?: WithAttributes<SectionItemEntityFragment>[]
  anchor?: string
  loadmore?: boolean
}

const FullWidthSection = ({ title, sectionItems, anchor, loadmore }: FullWidthSectionProps) => {
  const { t } = useTranslation()

  return (
    <Section anchor={anchor} title={title}>
      {sectionItems?.map((item) => (
        <FullWidthTile key={item.attributes.slug} sectionItem={item} />
      ))}

      {loadmore && (
        <div className="flex justify-center py-yMd">
          <Button size="medium">{t('common.exploreMoreContent')}</Button>
        </div>
      )}
    </Section>
  )
}

export default FullWidthSection
