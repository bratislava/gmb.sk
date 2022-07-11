import 'mapbox-gl/dist/mapbox-gl.css'

import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import Mapbox, { MapRef, Marker } from 'react-map-gl'
import { usePreviousImmediate } from 'rooks'

import GmbLogoIcon from '../../assets/icons/map-icons/gmb-logo.svg'
import MirbachovPalacIcon from '../../assets/icons/map-icons/mirbachov-palac.svg'
import PalffyhoPalacIcon from '../../assets/icons/map-icons/palffyho-palac.svg'
import { ContactEntityFragment } from '../../graphql'
import Link from '../atoms/Link'

interface MapProps {
  mapboxAccessToken: string
  // eslint-disable-next-line react/require-default-props
  contactInfo?: ContactEntityFragment
}

type TabKey = 'mhd' | 'bike' | 'car'

type Tab = {
  label: string
  key: TabKey
  layerIds: string[]
}

interface DescriptionSection {
  title?: string | null
  text?: string | null
}

const customLayers = ['on-street-parking', 'parking', 'city-transport', 'bike-stands', 'slovnaftbajk']

const ZOOMED_IN_BOUNDS: mapboxgl.LngLatBoundsLike = [
  [17.102_652_962_668_316, 48.140_976_775_235_4],
  [17.111_321_800_438_162, 48.146_792_945_905_62],
]

const ZOOMED_OUT_BOUNDS: mapboxgl.LngLatBoundsLike = [
  [17.101_943_044_995_41, 48.139_388_456_891_595],
  [17.117_128_583_907_345, 48.148_904_917_409_11],
]

// eslint-disable-next-line sonarjs/cognitive-complexity
export const Map = ({ mapboxAccessToken, contactInfo }: MapProps) => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null)
  const previousSelectedTab = usePreviousImmediate(selectedTab)
  const [descriptionSections, setDescriptionSections] = useState<DescriptionSection[]>([])
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

  const galleries = [
    {
      key: 'mirbach',
      icon: GmbLogoIcon,
      hoverIcon: MirbachovPalacIcon,
      coordinates: [17.107_771, 48.144_776],
      navigationLink:
        'https://www.google.com/maps/place/Gal%C3%A9ria+mesta+Bratislavy/@48.1448145,17.1078506,21z/data=!4m5!3m4!1s0x476c895ccb7fc10d:0xb128b708bec5bdcf!8m2!3d48.1447836!4d17.1078744',
      descriptionSections: [
        {
          text: contactInfo?.attributes?.mirbach?.title,
        },
        {
          text: `${contactInfo?.attributes?.mirbach?.address ?? 'no address'} / ${
            contactInfo?.attributes?.mirbach?.zip ?? 'no zip'
          } ${contactInfo?.attributes?.mirbach?.city ?? 'no city'}`,
        },
        {
          title: t('common.openingHours'),
          text: contactInfo?.attributes?.openingHours,
        },
        {
          title: t('map.virtualTour'),
          text: 'https://www.google.sk/maps/@48.1449202,17.1078293,2a,75y,106.9h,82.67t/data=!3m6!1e1!3m4!1swXMZxr5SnLs39DYua6bjhQ!2e0!7i13312!8i6656?hl=sk',
        },
      ],
    },
    {
      key: 'palffy',
      icon: GmbLogoIcon,
      hoverIcon: PalffyhoPalacIcon,
      coordinates: [17.107_084, 48.142_137],
      navigationLink:
        'https://www.google.com/maps/place/Gal%C3%A9ria+mesta+Bratislavy/@48.1422218,17.1069777,20.77z/data=!3m1!5s0x476c8942afadda65:0x4baacd9ceb6cb32e!4m5!3m4!1s0x476c8942b13a89cf:0xc49fbc0f1319519e!8m2!3d48.1422134!4d17.1071462',
      descriptionSections: [
        {
          text: contactInfo?.attributes?.palffy?.title,
        },
        {
          text: `${contactInfo?.attributes?.palffy?.address ?? 'no address'} / ${
            contactInfo?.attributes?.palffy?.zip ?? 'no zip'
          } ${contactInfo?.attributes?.palffy?.city ?? 'no city'}`,
        },
        {
          title: t('common.openingHours'),
          text: contactInfo?.attributes?.openingHours,
        },
        {
          title: t('map.virtualTour'),
          text: 'https://www.google.sk/maps/@48.1421564,17.1072173,3a,75y,101.14h,88.26t/data=!3m6!1e1!3m4!1sp3XvBNfKp5_3Z3OFGP5x2w!2e0!7i13312!8i6656!6m1!1e1?hl=sk&shorturl=1',
        },
      ],
    },
  ]

  const mapRef = useRef<MapRef>(null)

  const onGalleryClick = useCallback((gallery: typeof galleries[number], e: MouseEvent) => {
    e.stopPropagation()
    setDescriptionSections(gallery.descriptionSections)
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
        setDescriptionSections([])
        setSelectedFeaturePoint(null)
        setSelectedPlaceUrl(null)
        return
      }

      const properties = Object.keys(clickedFeature.properties ?? {})

      const newDescriptionSections: DescriptionSection[] = []

      properties.forEach((property) => {
        descriptionSections.push({
          title: property,
          text: clickedFeature.properties ? (clickedFeature.properties[property] as string) : '',
        })
      })

      setDescriptionSections(newDescriptionSections)
      setSelectedFeaturePoint([event.lngLat.lng, event.lngLat.lat])
      setSelectedPlaceUrl(null)
    },
    [descriptionSections]
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
    setDescriptionSections([])
    setSelectedFeaturePoint(null)
    setSelectedPlaceUrl(null)
  }, [mapRef, previousSelectedTab, selectedTab, setDescriptionSections])

  return (
    <div className="grid items-stretch bg-gmbDark text-nav text-white lg:grid-cols-3">
      <div className="flex h-fit w-full p-yMd lg:pb-0">
        {tabs.map((tab) => {
          return (
            <button
              type="button"
              key={tab.key}
              className={cx('flex space-x-2 uppercase px-4 py-2 items-center underline-offset-2 hover:underline', {
                underline: selectedTab?.key === tab.key,
              })}
              onClick={() => (selectedTab?.key !== tab.key ? setSelectedTab(tab) : setSelectedTab(null))}
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
              <Marker longitude={gallery.coordinates[0]} latitude={gallery.coordinates[1]} key={gallery.key}>
                <button type="button" className="group" onClick={(e) => onGalleryClick(gallery, e)}>
                  <gallery.icon className="group-hover:scale-0" width="64" height="64" />
                  <gallery.hoverIcon className="absolute top-0 scale-0 group-hover:scale-100" width="64" height="64" />
                </button>
              </Marker>
            ))}
          </Mapbox>
          <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-1/6 bg-gradient-to-r from-transparent to-gmbDark lg:block" />
        </div>
      </div>
      <div className="flex items-center p-8 lg:col-start-3 lg:h-[600px]">
        <div className="flex flex-col space-y-4 text-[20px] lg:px-xMd">
          {descriptionSections.length > 0 ? (
            descriptionSections.map(({ title, text }) => (
              <div key={text}>
                {text?.startsWith && text.startsWith('http') ? (
                  <Link href={text} target="_blank" rel="noreferrer">
                    {title}
                  </Link>
                ) : (
                  <>
                    <h5>{title}</h5>
                    <p>{text}</p>
                  </>
                )}
              </div>
            ))
          ) : (
            <>
              {!['mhd', 'bike', 'car'].includes(selectedTab?.key ?? '') && (
                <>
                  <div className="text-lg">{t('map.ourPremises')}</div>
                  {galleries.map((gallery) => (
                    <button
                      type="button"
                      key={gallery.key}
                      className="flex items-center gap-2 hover:underline"
                      onClick={(e) => onGalleryClick(gallery, e)}
                    >
                      <span>{gallery.descriptionSections[0].text}</span>
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
            'flex items-center border border-white w-fit px-8 py-2 uppercase hover:bg-white hover:text-gmbDark',
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
