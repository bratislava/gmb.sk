import { PartnerFragment } from '@bratislava/strapi-sdk-city-gallery';
import React from 'react';
import Link from '../../atoms/Link';
import Section from './Section';

interface PartnersSectionProps {
  title?: string;
  anchor?: string;
  partners?: PartnerFragment[];
}

const PartnersSection = ({ partners, title, anchor }: PartnersSectionProps) => {
  return (
    <Section anchor={anchor} color="gray" className="px-xStandard py-yHigh">
      {title && <h2 className="mb-24 text-xxl">{title}</h2>}
      <div className="flex flex-wrap gap-10">
        {partners?.map((partner) => (
          <Link
            href={partner.link ?? '#'}
            key={partner.id}
            className="flex justify-center items-center h-[115px] cursor-pointer overflow-hidden"
          >
            <img
              src={partner?.logo?.url}
              alt={partner?.logo?.alternativeText ?? undefined}
              className="h-[115px] object-contain"
            />
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default PartnersSection;
