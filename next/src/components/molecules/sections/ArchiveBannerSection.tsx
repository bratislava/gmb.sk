import ChessboardTile from '@/src/components/molecules/presentation/ChessboardTile'
import Section from '@/src/components/molecules/sections/Section'
import { ArchiveBannerSectionFragment, SectionItemEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

type ArchiveBannerSectionProps = {
  title?: string
  anchor?: string
  banner?: ArchiveBannerSectionFragment['banner']
}

const ArchiveBannerSection = ({ title, anchor, banner }: ArchiveBannerSectionProps) => {
  return (
    <Section title={title} anchor={anchor}>
      <ChessboardTile
        sectionItem={{ attributes: { ...banner } } as WithAttributes<SectionItemEntityFragment>}
        customLinkHref="/archiv-vystav"
      />
    </Section>
  )
}

export default ArchiveBannerSection
