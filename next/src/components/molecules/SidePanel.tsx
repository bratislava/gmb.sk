import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import Button from '@/src/components/atoms/Button'
import CityGalleryMarkdown from '@/src/components/atoms/CityGalleryMarkdown'
import Link from '@/src/components/atoms/Link'
import MobileShareButton from '@/src/components/atoms/MobileShareButton'
import ShareButton from '@/src/components/atoms/ShareButton'
import PlaceTime from '@/src/components/molecules/PlaceTime'
import {
  ContentPagePlaceFragment,
  DatetimeFragment,
  PartnerEntityFragment,
  PositionFragment,
} from '@/src/services/graphql'
import getDaysLeft from '@/src/utils/getDaysLeft'
import { isDefined, WithAttributes } from '@/src/utils/isDefined'
import mobileAndTabletRegexCheck from '@/src/utils/mobileAndTabletRegexCheck'

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
    // TODO may need refactor with not ts-ignores
    let hasTouchScreen = false
    if ('maxTouchPoints' in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0
    } else if ('msMaxTouchPoints' in navigator) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      hasTouchScreen = navigator.msMaxTouchPoints > 0
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      browserData.push(window.opera)
    }
    browserData.forEach((data) => {
      if (mobileAndTabletRegexCheck(data)) isMobileDetected = true
    })

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
      <aside
        className={cx(
          className,
          'flex w-full flex-col justify-between space-y-10 bg-white lg:space-y-20'
        )}
      >
        <CityGalleryMarkdown content={overrideText} />
      </aside>
    )
  }

  return (
    <aside
      className={cx(
        className,
        'flex w-full flex-col justify-between gap-yLg bg-white empty:hidden'
      )}
    >
      {perex && <p className="text-md">{perex}</p>}

      <PlaceTime place={place} datetime={datetime} />

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

      {positions?.filter(isDefined).map((position) => (
        <div key={position.title}>
          <h4 className="mb-yMd text-lg">{position.title}</h4>
          <p className="text-md">{position.names}</p>
        </div>
      ))}

      {showShare && slug && (
        <div>
          <h4 className="mb-yMd text-lg">{t('common.share')}</h4>
          {isMobile ? (
            <div>
              <MobileShareButton slug={slug} title={title || t('common.share')} />
            </div>
          ) : (
            <div className="flex gap-xMd">
              <ShareButton slug={slug} platform="email" title={title} />
              <ShareButton slug={slug} platform="facebook" />
              <ShareButton slug={slug} platform="twitter" />
              <ShareButton slug={slug} platform="whatsapp" />
              <ShareButton slug={slug} platform="linkedin" />
            </div>
          )}
        </div>
      )}

      {partners?.filter(isDefined).length ? (
        <div>
          <h4 className="mb-yMd text-lg">{t('common.partners')}</h4>
          <div className="flex flex-wrap gap-5">
            {partners?.map((partner) => (
              <Link
                key={partner.attributes.title}
                target="_blank"
                href={partner.attributes.link ?? '#'}
                className="overflow-hidden"
              >
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
