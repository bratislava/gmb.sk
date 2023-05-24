import CityGalleryMarkdown from '../../atoms/CityGalleryMarkdown'
import Section from './Section'

interface IRichtextSectionProps {
  content: string | null | undefined
  anchor?: string
  className?: string
}

const RichtextSection = ({ content, anchor, className }: IRichtextSectionProps) => {
  return (
    <Section anchor={anchor}>
      <CityGalleryMarkdown content={content} className={className} />
    </Section>
  )
}

export default RichtextSection
