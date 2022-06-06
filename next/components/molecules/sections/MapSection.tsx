import { useTranslation } from 'next-i18next';
import React from 'react';
import { ContactEntityFragment } from '../../../graphql';
import Map from '../Map';
import Section from './Section';

interface IMapSectionProps {
  contactInfo?: ContactEntityFragment;
  title?: string;
  anchor?: string;
}

const MapSection = ({ contactInfo, title, anchor }: IMapSectionProps) => {
  const { t } = useTranslation();

  return (
    <Section anchor={anchor} title={title}>
      {process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ? (
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          contactInfo={contactInfo}
        />
      ) : (
        <div className="relative text-white py-yStandard px-xStandard bg-gmbDark">
          <p className="text-md">{t('visitUs.mapNotWorking')}</p>
        </div>
      )}
    </Section>
  );
};

export default MapSection;
