import LocationIcon from '@/src/assets/icons/location.svg'
import { ContentPagePlaceFragment } from '@/src/services/graphql'

export interface SidePanelPlaceProps {
  placeFragment: ContentPagePlaceFragment
  isOneLine?: boolean
}

export const SidePanelPlace = ({ placeFragment, isOneLine = false }: SidePanelPlaceProps) => {
  const { place, placeTitle, placeAddress } = placeFragment

  if (!place && !placeTitle && !placeAddress) {
    return null
  }

  if (!place?.title && !placeTitle && isOneLine) {
    return null
  }

  return (
    <div className="text-nav">
      {!isOneLine && (
        <div className="mb-3">
          <LocationIcon className="dh-[48]" />
        </div>
      )}
      <address className="flex items-center gap-3 not-italic">
        {isOneLine && <LocationIcon className="dh-[24]" />}
        <span>
          {placeTitle || place?.title}
          {!isOneLine && <br />}
          {!isOneLine && (placeAddress || place?.address)}
        </span>
      </address>
    </div>
  )
}
