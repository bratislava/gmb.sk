import { useRouter } from 'next/router'

import ChessboardTile from '@/src/components/molecules/presentation/ChessboardTile'
import Section, { ISectionProps } from '@/src/components/molecules/sections/Section'
import { ArchiveBannerSectionFragment, SectionItemEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

type ArchiveBannerSectionProps = Pick<ISectionProps, 'title' | 'anchor'> & {
  banner?: ArchiveBannerSectionFragment['banner']
}

const ArchiveBannerSection = ({ title, anchor, banner }: ArchiveBannerSectionProps) => {
  const router = useRouter()

  return (
    <Section title={title} anchor={anchor}>
      <ChessboardTile
        sectionItem={{ attributes: { ...banner } } as WithAttributes<SectionItemEntityFragment>}
        customLinkHref={router.locale === 'sk' ? '/archiv-vystav' : '/exhibition-archive'}
      />
    </Section>
  )
}

export default ArchiveBannerSection
