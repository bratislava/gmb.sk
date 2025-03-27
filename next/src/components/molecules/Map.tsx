import 'mapbox-gl/dist/mapbox-gl.css'

import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import {
  FC,
  MouseEvent,
  ReactNode,
  SVGProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Mapbox, { MapRef, Marker } from 'react-map-gl'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { usePreviousImmediate } from 'rooks'

import GmbLogoIcon from '@/src/assets/icons/map-icons/gmb-logo.svg'
import MirbachovPalacIcon from '@/src/assets/icons/map-icons/mirbachov-palac.svg'
import PalffyhoPalacIcon from '@/src/assets/icons/map-icons/palffyho-palac.svg'
import Link from '@/src/components/atoms/Link'
import { useGeneralContext } from '@/src/utils/generalContext'

interface MapProps {
  mapboxAccessToken: string
}

type TabKey = 'mhd' | 'bike' | 'car'

type Tab = {
  label: string
  key: TabKey
  layerIds: string[]
}

interface BusFeaturePoint {
  type: 'bus'
  name: string
  connections: string
}

interface TramFeaturePoint {
  type: 'tram'
  name: string
  connections: string
}

interface ParkingFeaturePoint {
  type: 'parking'
  name: string
  price: string
  street: string
  contact: string
}

interface OnStreetParkingFeaturePoint {
  type: 'street-parking'
  price: string
  street: string
  contact: string
}

interface SlovnaftBikeFeaturePoint {
  type: 'slovnaft-bike'
  name: string
  count: number
}

type FeaturePoint =
  | BusFeaturePoint
  | TramFeaturePoint
  | ParkingFeaturePoint
  | OnStreetParkingFeaturePoint
  | SlovnaftBikeFeaturePoint

interface Gallery {
  key: string
  localisedName: string
  icon: FC<SVGProps<SVGSVGElement>>
  hoverIcon: FC<SVGProps<SVGSVGElement>>
  coordinates: [number, number]
  navigationLink: string
  description: ReactNode
}

const customLayers = [
  'on-street-parking',
  'parking',
  'city-transport',
  'bike-stands',
  'slovnaftbajk',
]

const ZOOMED_IN_BOUNDS: mapboxgl.LngLatBoundsLike = [
  [17.102_652_962_668_316, 48.140_976_775_235_4],
  [17.111_321_800_438_162, 48.146_792_945_905_62],
]

const ZOOMED_OUT_BOUNDS: mapboxgl.LngLatBoundsLike = [
  [17.101_943_044_995_41, 48.139_388_456_891_595],
  [17.117_128_583_907_345, 48.148_904_917_409_11],
]

// eslint-disable-next-line sonarjs/cognitive-complexity
const Map = ({ mapboxAccessToken }: MapProps) => {
  const { general } = useGeneralContext()
  const { palffy, mirbach, openingHours } = general?.data?.attributes ?? {}

  const [selectedTab, setSelectedTab] = useState<Tab | null>(null)
  const previousSelectedTab = usePreviousImmediate(selectedTab)

  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null)
  const [description, setDescription] = useState<ReactNode>(null)
  const [selectedFeaturePoint, setSelectedFeaturePoint] = useState<[number, number] | null>(null)

  const { t } = useTranslation()

  const [selectedPlaceUrl, setSelectedPlaceUrl] = useState<string | null>(null)

  const tabs: Tab[] = [
    {
      label: t('map.publicTransport'),
      key: 'mhd',
      layerIds: ['city-transport'],
    },
    {
      label: t('map.byBike'),
      key: 'bike',
      layerIds: ['bike-stands', 'slovnaftbajk'],
    },
    {
      label: t('map.byCar'),
      key: 'car',
      layerIds: ['on-street-parking', 'parking'],
    },
  ]

  const galleries: Gallery[] = [
    {
      key: 'mirbach',
      localisedName: t('map.palaceTitle.mirbach'),
      icon: GmbLogoIcon,
      hoverIcon: MirbachovPalacIcon,
      coordinates: [17.107_771, 48.144_776],
      navigationLink:
        'https://www.google.com/maps/place/Gal%C3%A9ria+mesta+Bratislavy/@48.1448145,17.1078506,21z/data=!4m5!3m4!1s0x476c895ccb7fc10d:0xb128b708bec5bdcf!8m2!3d48.1447836!4d17.1078744',
      description: (
        <div className="flex flex-col gap-4">
          <div>{mirbach?.title}</div>
          <div>{`${mirbach?.address ?? 'no address'} / ${mirbach?.zip ?? 'no zip'} ${
            mirbach?.city ?? 'no city'
          }`}</div>

          <div>
            <div>{t('common.openingHours')}</div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{openingHours ?? ''}</ReactMarkdown>
          </div>

          <Link
            className="underline"
            href="https://www.google.sk/maps/@48.1449202,17.1078293,2a,75y,106.9h,82.67t/data=!3m6!1e1!3m4!1swXMZxr5SnLs39DYua6bjhQ!2e0!7i13312!8i6656?hl=sk"
            target="_blank"
            rel="noreferrer"
          >
            {t('map.virtualTour')}
          </Link>
        </div>
      ),
    },
    {
      key: 'palffy',
      localisedName: t('map.palaceTitle.palffy'),
      icon: GmbLogoIcon,
      hoverIcon: PalffyhoPalacIcon,
      coordinates: [17.107_084, 48.142_137],
      navigationLink:
        'https://www.google.com/maps/place/Gal%C3%A9ria+mesta+Bratislavy/@48.1422218,17.1069777,20.77z/data=!3m1!5s0x476c8942afadda65:0x4baacd9ceb6cb32e!4m5!3m4!1s0x476c8942b13a89cf:0xc49fbc0f1319519e!8m2!3d48.1422134!4d17.1071462',
      description: (
        <div className="flex flex-col gap-4">
          <div>{palffy?.title}</div>
          <div>{`${palffy?.address ?? 'no address'} / ${palffy?.zip ?? 'no zip'} ${
            palffy?.city ?? 'no city'
          }`}</div>

          <div>
            <div>{t('common.openingHours')}</div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{openingHours ?? ''}</ReactMarkdown>
          </div>

          <Link
            className="underline"
            href="https://www.google.sk/maps/@48.1421564,17.1072173,3a,75y,101.14h,88.26t/data=!3m6!1e1!3m4!1sp3XvBNfKp5_3Z3OFGP5x2w!2e0!7i13312!8i6656!6m1!1e1?hl=sk&shorturl=1"
            target="_blank"
            rel="noreferrer"
          >
            {t('map.virtualTour')}
          </Link>
        </div>
      ),
    },
  ]

  const mapRef = useRef<MapRef>(null)

  const onGalleryClick = useCallback((gallery: (typeof galleries)[number], e: MouseEvent) => {
    e.stopPropagation()
    setSelectedGallery(gallery)
    setDescription(gallery.description)
    setSelectedFeaturePoint(null)
    setSelectedPlaceUrl(gallery.navigationLink)
  }, [])

  const onMapLoad = useCallback(() => {
    const MAP = mapRef.current
    if (!MAP) return

    MAP.fitBounds(ZOOMED_IN_BOUNDS, {
      padding: { right: 100, top: 0, left: 32, bottom: 0 },
      duration: 0,
    })

    customLayers.forEach((customLayer) => {
      MAP.getMap().setLayoutProperty(customLayer, 'visibility', 'none')
    })

    MAP.getStyle()?.layers?.forEach((layer) => {
      if (layer.type === 'line') {
        MAP.getMap().setLayoutProperty(layer.id, 'visibility', 'none')
      }
    })
  }, [mapRef])

  const onMapClick = useCallback(
    (event: mapboxgl.MapLayerMouseEvent) => {
      const MAP = mapRef.current
      if (!MAP) return

      const clickedFeature = MAP.queryRenderedFeatures(event.point)[0]

      if (!clickedFeature) return

      if (!customLayers.includes(clickedFeature.layer.id)) {
        setSelectedGallery(null)
        setDescription(null)
        setSelectedFeaturePoint(null)
        setSelectedPlaceUrl(null)
        return
      }

      const properties = clickedFeature.properties as FeaturePoint

      switch (properties.type) {
        case 'bus':
        case 'tram':
          setDescription(
            <div className="flex flex-col gap-4">
              <div>{properties.name}</div>
              <div>
                <div>{t('map.connections')}</div>
                <div>{properties.connections}</div>
              </div>
            </div>
          )
          break

        case 'parking':
          setDescription(
            <div className="flex flex-col gap-4">
              <div>
                <div>{t('map.name')}</div>
                <div>{properties.name}</div>
              </div>
              <div>
                <div>{t('map.street')}</div>
                <div>{properties.street}</div>
              </div>
              <div>
                <div>{t('map.price')}</div>
                <div>{properties.price}</div>
              </div>
              <div>
                <div>{t('map.contact')}</div>
                <div>{properties.contact}</div>
              </div>
            </div>
          )
          break

        case 'street-parking':
          setDescription(
            <div className="flex flex-col gap-4">
              <div>
                <div>{t('map.street')}</div>
                <div>{properties.street}</div>
              </div>
              <div>
                <div>{t('map.price')}</div>
                <div>{properties.price}</div>
              </div>
              <div>
                <div>{t('map.contact')}</div>
                <div>{properties.contact}</div>
              </div>
            </div>
          )
          break

        case 'slovnaft-bike':
          setDescription(
            <div className="flex flex-col gap-4">
              <div>{properties.name}</div>
              <div>
                <div>{t('map.count')}</div>
                <div>{properties.count}</div>
              </div>
            </div>
          )
          break

        default:
          setDescription(null)
      }

      setSelectedGallery(null)
      setSelectedFeaturePoint([event.lngLat.lng, event.lngLat.lat])
      setSelectedPlaceUrl(null)
    },
    [t]
  )

  // on layers change
  useEffect(() => {
    const MAP = mapRef.current
    if (!MAP) return

    if (previousSelectedTab) {
      previousSelectedTab.layerIds.forEach((layerId) => {
        MAP.getMap().setLayoutProperty(layerId, 'visibility', 'none')
      })
    }

    if (selectedTab) {
      selectedTab.layerIds.forEach((layerId) => {
        MAP.getMap().setLayoutProperty(layerId, 'visibility', 'visible')
      })

      MAP.fitBounds(ZOOMED_OUT_BOUNDS, {
        padding: { right: 100, top: 0, left: 32, bottom: 0 },
      })
    } else {
      MAP.fitBounds(ZOOMED_IN_BOUNDS, {
        padding: { right: 100, top: 0, left: 32, bottom: 0 },
      })
    }

    // reset description
    setSelectedGallery(null)
    setDescription(null)
    setSelectedFeaturePoint(null)
    setSelectedPlaceUrl(null)
  }, [mapRef, previousSelectedTab, selectedTab, setDescription])

  return (
    <div className="grid items-stretch bg-gmbDark leading-6 text-white lg:grid-cols-3">
      <div className="flex h-fit w-full p-yMd text-lg lg:pb-0">
        {tabs.map((tab) => {
          return (
            <button
              type="button"
              key={tab.key}
              className={cx(
                'flex items-center space-x-2 px-4 py-2 uppercase underline-offset-2 hover:underline',
                {
                  underline: selectedTab?.key === tab.key,
                }
              )}
              onClick={() =>
                selectedTab?.key === tab.key ? setSelectedTab(null) : setSelectedTab(tab)
              }
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div className="relative w-full overflow-hidden bg-gmbDark pt-96 lg:col-span-2 lg:col-start-1 lg:row-span-3 lg:row-start-1">
        <div className="absolute top-0 h-full w-full">
          <Mapbox
            ref={mapRef}
            mapboxAccessToken={mapboxAccessToken}
            initialViewState={{
              latitude: 48.143_884_942_949_77,
              longitude: 17.107_397_852_380_586,
              zoom: 15.829_748_625_586_49,
            }}
            onLoad={onMapLoad}
            onClick={onMapClick}
            // eslint-disable-next-line no-secrets/no-secrets
            mapStyle="mapbox://styles/bratislava01/cl10zhtsr007t15o8zon1rwsb"
            doubleClickZoom={false}
            dragRotate={false}
            dragPan={false}
            scrollZoom={false}
            touchZoomRotate={false}
            interactive={false}
          >
            {galleries.map((gallery) => (
              <Marker
                longitude={gallery.coordinates[0]}
                latitude={gallery.coordinates[1]}
                key={gallery.key}
              >
                <button
                  type="button"
                  className="group"
                  onClick={(e) => onGalleryClick(gallery, e)}
                  aria-label={gallery.localisedName}
                >
                  <gallery.icon
                    className={cx('group-hover:scale-0', {
                      'scale-0': selectedGallery?.key === gallery.key,
                    })}
                    width="64"
                    height="64"
                  />
                  <gallery.hoverIcon
                    className={cx('absolute top-0 group-hover:scale-100', {
                      'scale-100': selectedGallery?.key === gallery.key,
                      'scale-0': selectedGallery?.key !== gallery.key,
                    })}
                    width="64"
                    height="64"
                  />
                </button>
              </Marker>
            ))}
          </Mapbox>
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/6 bg-gradient-to-r from-transparent to-gmbDark lg:block" />
        </div>
      </div>
      <div className="flex items-center p-8 lg:col-start-3 lg:h-[600px]">
        <div className="flex flex-col space-y-4 text-[20px] leading-6 lg:px-xMd">
          {description ?? (
            <>
              {!['mhd', 'bike', 'car'].includes(selectedTab?.key ?? '') && (
                <>
                  <div className="text-lg">{t('map.ourPremises')}</div>
                  {galleries.map((gallery) => (
                    <button
                      type="button"
                      key={gallery.key}
                      className="flex items-center gap-2 text-md hover:underline"
                      onClick={(e) => onGalleryClick(gallery, e)}
                    >
                      <span>{gallery.localisedName}</span>
                    </button>
                  ))}
                </>
              )}
              {selectedTab?.key === 'mhd' && <p>{t('map.publicTransportText')}</p>}
              {selectedTab?.key === 'bike' && <p>{t('map.bikeText')}</p>}
              {selectedTab?.key === 'car' && <p>{t('map.carText')}</p>}
            </>
          )}
        </div>
      </div>
      <div className="h-fit px-8 pb-8 lg:col-start-3">
        <Link
          target="_blank"
          noUnderline
          preserveStyle
          href={
            selectedPlaceUrl ??
            (selectedFeaturePoint &&
              `https://www.google.com/maps/place/${selectedFeaturePoint[1]},${selectedFeaturePoint[0]}`) ??
            '#'
          }
          className={cx(
            'flex w-fit items-center border border-white px-8 py-2 uppercase hover:bg-white hover:text-gmbDark',
            { invisible: !(selectedPlaceUrl ?? selectedFeaturePoint) }
          )}
          rel="noreferrer"
        >
          {t('map.navigate')}
        </Link>
      </div>
    </div>
  )
}

export default Map
