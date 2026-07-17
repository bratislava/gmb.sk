import ChessboardTile from '@/src/components/molecules/presentation/ChessboardTile'
import Section, { ISectionProps } from '@/src/components/molecules/sections/Section'
import { ArchiveBannerSectionFragment, SectionItemEntityFragment } from '@/src/services/graphql'

type ArchiveBannerSectionProps = Pick<ISectionProps, 'title' | 'anchor'> & {
  banner: ArchiveBannerSectionFragment['banner']
}

const ArchiveBannerSection = ({ title, anchor, banner }: ArchiveBannerSectionProps) => {
  return (
    <Section title={title} anchor={anchor}>
      <ChessboardTile
        sectionItem={{ attributes: { ...banner } } as SectionItemEntityFragment}
        customLinkHref={banner.url ?? '#'}
      />
    </Section>
  )
}

export default ArchiveBannerSection
