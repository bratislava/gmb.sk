import Link from '@/src/components/atoms/Link'
import Section from '@/src/components/molecules/sections/Section'
import { PartnerEntityFragment } from '@/src/services/graphql'

interface PartnersSectionProps {
  title?: string
  anchor?: string
  partners?: PartnerEntityFragment[]
}

const PartnersSection = ({ partners, title, anchor }: PartnersSectionProps) => {
  return (
    <Section anchor={anchor} color="gray" className="px-xMd py-yLg">
      {title ? <h2 className="mb-yLg text-xxl">{title}</h2> : null}
      <div className="flex flex-wrap gap-xMd">
        {partners?.map((partner) => (
          <Link
            href={partner.link ?? '#'}
            key={partner.documentId}
            aria-label={partner.title}
            preserveStyle
            noUnderline
            className="flex dh-[115] dw-[115] items-center justify-center overflow-hidden"
            target="_blank"
          >
            <img
              src={partner.logo.url}
              alt={partner.logo.alternativeText ?? ''}
              className="h-[115px] object-contain"
            />
          </Link>
        ))}
      </div>
    </Section>
  )
}

export default PartnersSection
