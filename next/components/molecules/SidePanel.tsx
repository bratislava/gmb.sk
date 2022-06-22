import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import { ContentPagePlaceFragment, DatetimeFragment, PartnerEntityFragment, PositionFragment } from '../../graphql'
import getDaysLeft from '../../utils/getDaysLeft'
import { isDefined, WithAttributes } from '../../utils/isDefined'
import mobileAndTabletRegexCheck from '../../utils/mobileAndTabletRegexCheck'
import Button from '../atoms/Button'
import CityGalleryMarkdown from '../atoms/CityGalleryMarkdown'
import Link from '../atoms/Link'
import MobileShareButton from '../atoms/MobileShareButton'
import ShareButton from '../atoms/ShareButton'
import { SidePanelPlace } from '../atoms/SidePanelPlace'
import { SidePanelTime } from '../atoms/SidePanelTime'

interface SidePanelProps {
  overrideText?: string
  title?: string
  perex?: string
  place?: ContentPagePlaceFragment
  datetime?: DatetimeFragment
  positions?: PositionFragment[]
  partners?: WithAttributes<PartnerEntityFragment>[]
  purchaseId?: string | null
  slug?: string
  showShare?: boolean
  className?: string
}

const SidePanel = ({
  overrideText,
  title,
  perex,
  place,
  datetime,
  positions,
  partners,
  purchaseId,
  slug,
  showShare,
  className,
}: SidePanelProps) => {
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    // Solution for mobile detection from: https://stackoverflow.com/a/58171659
    let hasTouchScreen = false
    if ('maxTouchPoints' in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0
    } else if ('msMaxTouchPoints' in navigator) {
      // @ts-ignore
      hasTouchScreen = navigator.msMaxTouchPoints > 0
    } else {
      // @ts-ignore
      const mQ = window.matchMedia && matchMedia('(pointer:coarse)')
      if (mQ && mQ.media === '(pointer:coarse)') {
        hasTouchScreen = !!mQ.matches
      } else if ('orientation' in window) {
        hasTouchScreen = true // deprecated, but good fallback
      }
    }

    let isMobileDetected = false
    const browserData = [navigator.userAgent, navigator.vendor]
    if ('opera' in window) {
      // @ts-ignore
      browserData.push(window.opera)
    }
    for (const data in browserData) {
      if (mobileAndTabletRegexCheck(data)) isMobileDetected = true
    }
    setIsMobile(hasTouchScreen || isMobileDetected)
  }, [])

  const daysLeft = getDaysLeft(datetime?.dateFrom)

  if (
    !place?.placeAddress &&
    !place?.place?.data?.attributes &&
    !place?.placeTitle &&
    !datetime?.dateFrom &&
    positions?.length === 0 &&
    partners?.length === 0 &&
    !perex &&
    !overrideText &&
    !purchaseId &&
    !showShare
  ) {
    return null
  }

  if (overrideText) {
    return (
      <aside className={cx(className, 'flex flex-col justify-between w-full space-y-10 bg-white lg:space-y-20')}>
        <CityGalleryMarkdown content={overrideText} />
      </aside>
    )
  }

  return (
    <aside className={cx(className, 'flex flex-col justify-between w-full space-y-10 bg-white lg:space-y-20')}>
      {perex && <p className="text-md">{perex}</p>}

      {/* TODO hide this div is there is no datetime and place, otherwise, it causes margin-top to next element */}
      <div className="grid grid-cols-2">
        {place && <SidePanelPlace placeFragment={place} />}
        {datetime && <SidePanelTime datetime={datetime} />}
      </div>

      {datetime?.showRemainingTime && daysLeft > 0 && (
        <div className="text-xxl">
          {t('common.daysLeft', {
            count: daysLeft,
          })}
        </div>
      )}

      {purchaseId && slug ? (
        <Button id="buy-tickets-btn" size="small" className="w-fit" href={`/vstupenky/${slug}`}>
          {t('common.buyTickets')}
        </Button>
      ) : null}

      {showShare && slug && (
        <div>
          <h4 className="mb-5 text-lg lg:mb-8">{t('common.share')}</h4>
          {isMobile ? (
            <div>
              <MobileShareButton slug={slug} title={title || t('common.share')} />
            </div>
          ) : (
            <div className="flex gap-5">
              <ShareButton slug={slug} platform="email" title={title} />
              <ShareButton slug={slug} platform="facebook" />
              <ShareButton slug={slug} platform="twitter" />
              <ShareButton slug={slug} platform="whatsapp" />
              <ShareButton slug={slug} platform="linkedin" />
            </div>
          )}
        </div>
      )}

      {positions?.filter(isDefined).map((position) => (
        <div key={position.title}>
          <h4 className="mb-5 text-lg lg:mb-8">{position.title}</h4>
          <p className="text-md">{position.names}</p>
        </div>
      ))}

      {partners?.filter(isDefined).length ? (
        <div>
          <h4 className="mb-5 text-lg lg:mb-8">{t('common.partners')}</h4>
          <div className="flex flex-wrap gap-5">
            {partners?.map((partner, index) => (
              <Link key={index} href={partner.attributes.link ?? '#'} className="overflow-hidden">
                <img
                  src={partner.attributes.logo.data?.attributes?.url}
                  alt={partner.attributes.logo.data?.attributes?.alternativeText ?? ''}
                  className="h-[50px]"
                />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </aside>
  )
}

export default SidePanel
