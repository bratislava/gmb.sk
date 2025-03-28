import { useTranslation } from 'next-i18next'

import Button from '@/src/components/atoms/Button'
import FullWidthTile from '@/src/components/molecules/presentation/FullWidthTile'
import Section from '@/src/components/molecules/sections/Section'
import { SectionItemEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

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
      {sectionItems?.map((item) => <FullWidthTile key={item.attributes.slug} sectionItem={item} />)}

      {loadmore && (
        <div className="flex justify-center py-yMd">
          <Button size="medium">{t('common.exploreMoreContent')}</Button>
        </div>
      )}
    </Section>
  )
}

export default FullWidthSection
