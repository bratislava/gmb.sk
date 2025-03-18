import Highlight from '@/src/components/molecules/presentation/Highlight'
import Section from '@/src/components/molecules/sections/Section'
import { HighlightsItemEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

interface IHighlightSectionsProps {
  highlights: WithAttributes<HighlightsItemEntityFragment>[] | null | undefined
}

const HighlightsSection = ({ highlights }: IHighlightSectionsProps) => {
  if (!highlights) {
    return null
  }

  return (
    <Section>
      {highlights.map((item) => (
        <Highlight key={item.attributes.slug} highlight={item} />
      ))}
    </Section>
  )
}

export default HighlightsSection
