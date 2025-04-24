import { useTranslation } from 'next-i18next'

import DownloadSection from '@/src/components/molecules/sections/DownloadSection'
import Section, { ISectionProps } from '@/src/components/molecules/sections/Section'
import { DisclosureSectionFragment } from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'

type DisclosureSectionProps = Pick<ISectionProps, 'title' | 'anchor'> & {
  additionalFilesSection?: DisclosureSectionFragment['additionalFilesSection']
}

const DisclosureSection = ({ title, anchor, additionalFilesSection }: DisclosureSectionProps) => {
  const { t } = useTranslation()

  return (
    <Section title={title ?? t('footer.disclosureOfInformation')} anchor={anchor}>
      <div className="px-xMd pb-yLg">
        <iframe
          title={t('footer.disclosureOfInformation')}
          src="https://zmluvy.egov.sk/egov/contracts/place:259/iframe/showZmluvy/showFaktury/showObjednavky/orderBy:datum/direction:desc"
          width="100%"
          height="1060px"
        />
      </div>
      <DownloadSection
        title={additionalFilesSection?.title}
        files={additionalFilesSection?.files?.filter(isDefined) ?? []}
      />
    </Section>
  )
}

export default DisclosureSection
