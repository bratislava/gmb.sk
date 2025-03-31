import { useTranslation } from 'next-i18next'

import DownloadSection from '@/src/components/molecules/sections/DownloadSection'
import Section, { ISectionProps } from '@/src/components/molecules/sections/Section'
import { InformationDisclosureSectionFragment } from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'

type InformationDisclosureSectionProps = Pick<ISectionProps, 'title' | 'anchor'> & {
  additionalFilesSection?: InformationDisclosureSectionFragment['additionalFilesSection']
}

const InformationDisclosureSection = ({
  title,
  anchor,
  additionalFilesSection,
}: InformationDisclosureSectionProps) => {
  const { t } = useTranslation()

  return (
    <Section title={title ?? t('footer.disclosureOfInformation')} anchor={anchor}>
      <div className="px-xMd py-yLg">
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

export default InformationDisclosureSection
