import CardSection from '@/src/components/molecules/sections/CardSection'
import ChessboardSection from '@/src/components/molecules/sections/ChessboardSection'
import FullWidthSection from '@/src/components/molecules/sections/FullWidthSection'
import {
  Enum_Componentsectionspagesection_Layout,
  PageSectionFragment,
} from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'

export interface SectionProps {
  section: PageSectionFragment
  anchor?: string
}

const PageSectionContainer = ({ section, anchor }: SectionProps) => {
  if (section.layout === Enum_Componentsectionspagesection_Layout.Chessboard) {
    return (
      <ChessboardSection
        sectionItems={section.contentPages?.map((item) => item?.contentPage).filter(isDefined)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    )
  }

  if (section.layout === Enum_Componentsectionspagesection_Layout.Cards) {
    return (
      <CardSection
        sectionItems={section.contentPages?.map((item) => item?.contentPage).filter(isDefined)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    )
  }

  if (section.layout === Enum_Componentsectionspagesection_Layout.Fullwidth) {
    return (
      <FullWidthSection
        sectionItems={section.contentPages?.map((item) => item?.contentPage).filter(isDefined)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    )
  }

  return (
    <ChessboardSection
      sectionItems={section.contentPages?.map((item) => item?.contentPage).filter(isDefined)}
      title={section.title ?? undefined}
      anchor={anchor}
    />
  )
}

export default PageSectionContainer
