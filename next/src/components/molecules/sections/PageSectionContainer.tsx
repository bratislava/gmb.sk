import CardSection from '@/src/components/molecules/sections/CardSection'
import ChessboardSection from '@/src/components/molecules/sections/ChessboardSection'
import FullWidthSection from '@/src/components/molecules/sections/FullWidthSection'
import { PageSectionFragment } from '@/src/services/graphql'
import { hasAttributes } from '@/src/utils/isDefined'

export interface SectionProps {
  section: PageSectionFragment
  anchor?: string
}

const PageSectionContainer = ({ section, anchor }: SectionProps) => {
  if (section.layout === 'chessboard') {
    return (
      <ChessboardSection
        sectionItems={section.contentPages
          ?.map((item) => item?.contentPage?.data)
          .filter(hasAttributes)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    )
  }

  if (section.layout === 'cards') {
    return (
      <CardSection
        sectionItems={section.contentPages
          ?.map((item) => item?.contentPage?.data)
          .filter(hasAttributes)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    )
  }

  if (section.layout === 'fullwidth') {
    return (
      <FullWidthSection
        sectionItems={section.contentPages
          ?.map((item) => item?.contentPage?.data)
          .filter(hasAttributes)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    )
  }

  return (
    <ChessboardSection
      sectionItems={section.contentPages
        ?.map((item) => item?.contentPage?.data)
        .filter(hasAttributes)}
      title={section.title ?? undefined}
      anchor={anchor}
    />
  )
}

export default PageSectionContainer
