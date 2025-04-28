import { useTranslation } from 'next-i18next'

import Section, { ISectionProps } from '@/src/components/molecules/sections/Section'

type DisclosureSectionProps = Pick<ISectionProps, 'title' | 'anchor'>

const DisclosureSection = ({ title, anchor }: DisclosureSectionProps) => {
  const { t } = useTranslation()

  return (
    <Section title={title ?? t('footer.disclosureOfInformation')} anchor={anchor}>
      <iframe
        title={t('footer.disclosureOfInformation')}
        src="https://zmluvy.egov.sk/egov/contracts/place:259/iframe/showZmluvy/showFaktury/showObjednavky/orderBy:datum/direction:desc"
        width="100%"
        height="1060px"
        className="px-xMd pb-yLg"
      />
    </Section>
  )
}

export default DisclosureSection
