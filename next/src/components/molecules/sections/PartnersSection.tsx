import Link from '@/src/components/atoms/Link'
import Section from '@/src/components/molecules/sections/Section'
import { PartnerEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

interface PartnersSectionProps {
  title?: string
  anchor?: string
  partners?: WithAttributes<PartnerEntityFragment>[]
}

const PartnersSection = ({ partners, title, anchor }: PartnersSectionProps) => {
  return (
    <Section anchor={anchor} color="gray" className="px-xMd py-yLg">
      {title ? <h2 className="mb-yLg text-xxl">{title}</h2> : null}
      <div className="flex flex-wrap gap-xMd">
        {partners?.map((partner) => (
          <Link
            href={partner.attributes.link ?? '#'}
            key={partner.id}
            aria-label={partner.attributes.title}
            preserveStyle
            noUnderline
            className="flex items-center justify-center overflow-hidden dh-[115] dw-[115]"
            target="_blank"
          >
            <img
              src={partner?.attributes.logo.data?.attributes?.url}
              alt={partner?.attributes.logo.data?.attributes?.alternativeText ?? ''}
              className="h-[115px] object-contain"
            />
          </Link>
        ))}
      </div>
    </Section>
  )
}

export default PartnersSection
