import Highlight from '@/components/molecules/presentation/Highlight'
import Section from '@/components/molecules/sections/Section'
import { HighlightsItemEntityFragment } from '@/graphql'
import { WithAttributes } from '@/utils/isDefined'

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
