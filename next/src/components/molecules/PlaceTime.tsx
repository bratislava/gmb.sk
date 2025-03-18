import { SidePanelPlace } from '@/src/components/atoms/SidePanelPlace'
import { SidePanelTime } from '@/src/components/atoms/SidePanelTime'
import { ContentPagePlaceFragment, DatetimeFragment } from '@/src/services/graphql'

interface IPlaceTimeProps {
  place: ContentPagePlaceFragment | undefined
  datetime: DatetimeFragment | undefined
}

const PlaceTime = ({ place, datetime }: IPlaceTimeProps) => {
  if (
    place?.place?.data?.attributes?.address ||
    place?.place?.data?.attributes?.title ||
    place?.placeAddress ||
    place?.placeTitle ||
    datetime?.dateFrom ||
    datetime?.timeFrom ||
    datetime?.dateTo ||
    datetime?.timeTo
  ) {
    return (
      <div className="grid grid-cols-2">
        {place && <SidePanelPlace placeFragment={place} />}
        {datetime && <SidePanelTime datetime={datetime} />}
      </div>
    )
  }
  return null
}

export default PlaceTime
