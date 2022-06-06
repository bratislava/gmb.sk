import React from 'react'
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
    <Section anchor={anchor} color="gray" className="px-xStandard py-yHigh">
      {title && <h2 className="mb-24 text-xxl">{title}</h2>}
      <div className="flex flex-wrap gap-10">
        {partners?.map((partner, index) => (
          <Link
            href={partner.attributes.link ?? '#'}
            key={index}
            className="flex justify-center items-center h-[115px] cursor-pointer overflow-hidden"
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
