import { useTranslation } from 'next-i18next'

import { GeneralEntityFragment } from '../../../graphql'
import Map from '../Map'
import Section from './Section'

interface IMapSectionProps {
  contactInfo?: GeneralEntityFragment
  title?: string
  anchor?: string
}

const MapSection = ({ contactInfo, title, anchor }: IMapSectionProps) => {
  const { t } = useTranslation()

  return (
    <Section anchor={anchor} title={title}>
      {process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ? (
        <Map mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN} contactInfo={contactInfo} />
      ) : (
        <div className="relative bg-gmbDark py-yMd px-xMd text-white">
          <p className="text-md">{t('visitUs.mapNotWorking')}</p>
        </div>
      )}
    </Section>
  )
}

export default MapSection
