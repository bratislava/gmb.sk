import { PlaceFragment } from '@bratislava/strapi-sdk-city-gallery';
import React from 'react';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';

export interface SidePanelPlaceProps {
  placeFragment: PlaceFragment;
  isOneLine?: boolean;
  className?: string;
}

export const SidePanelPlace = ({
  placeFragment,
  isOneLine = false,
}: SidePanelPlaceProps) => {
  const { place, placeTitle, placeAddress } = placeFragment;

  if (!place && !placeTitle && !placeAddress) {
    return null;
  }

  if (!place?.title && !placeTitle && isOneLine) {
    return null;
  }

  return (
    <div className="text-nav">
      {!isOneLine && (
        <div className="mb-3">
          <LocationIcon height="48" />
        </div>
      )}
      <address className="flex items-center gap-3 not-italic">
        {isOneLine && <LocationIcon height="24" width="24" />}
        <span>
          {placeTitle || place?.title}
          {!isOneLine && <br />}
          {!isOneLine && (placeAddress || place?.address)}
        </span>
      </address>
    </div>
  );
};
