import { PageSectionFragment } from '../../../graphql'
import { hasAttributes } from '../../../utils/isDefined'
import CardSection from './CardSection'
import ChessboardSection from './ChessboardSection'
import FullWidthSection from './FullWidthSection'

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
