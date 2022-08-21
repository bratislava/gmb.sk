import { PartnerEntityFragment } from '../../../graphql'
import { WithAttributes } from '../../../utils/isDefined'
import Link from '../../atoms/Link'
import Section from './Section'

interface PartnersSectionProps {
  title?: string
  anchor?: string
  partners?: WithAttributes<PartnerEntityFragment>[]
}

const PartnersSection = ({ partners, title, anchor }: PartnersSectionProps) => {
  return (
    <Section anchor={anchor} color="gray" className="px-xMd py-yLg">
      {title && <h2 className="mb-yLg text-xxl">{title}</h2>}
      <div className="flex flex-wrap gap-xMd">
        {partners?.map((partner) => (
          <Link
            href={partner.attributes.link ?? '#'}
            key={partner.id}
            preserveStyle
            noUnderline
            className="flex items-center justify-center overflow-hidden dh-[115px] dw-[115px]"
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
