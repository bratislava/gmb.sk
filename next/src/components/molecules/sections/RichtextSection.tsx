import CityGalleryMarkdown from '@/src/components/atoms/CityGalleryMarkdown'
import Section from '@/src/components/molecules/sections/Section'

interface IRichtextSectionProps {
  content: string | null | undefined
  anchor?: string
  accentColor?: string
  className?: string
}

const RichtextSection = ({ content, anchor, accentColor, className }: IRichtextSectionProps) => {
  return (
    <Section anchor={anchor}>
      <CityGalleryMarkdown content={content} className={className} accentColor={accentColor} />
    </Section>
  )
}

export default RichtextSection
