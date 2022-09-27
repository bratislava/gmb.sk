import { HighlightsItemEntityFragment } from '../../../graphql'
import { WithAttributes } from '../../../utils/isDefined'
import Highlight from '../Highlight'
import Section from './Section'

interface IHighlightSectionsProps {
  highlights: WithAttributes<HighlightsItemEntityFragment>[] | null | undefined
}

const HighlightsSection = ({ highlights }: IHighlightSectionsProps) => {
  if (!highlights) {
    return null
  }

  return (
    <Section>
      {highlights.map((item, index) => (
        <Highlight key={item.attributes.slug} highlight={item} isPriority={index === 0} />
      ))}
    </Section>
  )
}

export default HighlightsSection
