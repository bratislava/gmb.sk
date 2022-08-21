import cx from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

import { HighlightsItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { getPurchaseId } from '../../utils/getPurchaseId'
import { isDefined, WithAttributes } from '../../utils/isDefined'
import { onEnterOrSpaceKeyDown } from '../../utils/onEnterOrSpaceKeyDown'
import Button from '../atoms/Button'
import { SidePanelTime } from '../atoms/SidePanelTime'
import SidePanel from './SidePanel'

interface HighlightProps {
  highlight: WithAttributes<HighlightsItemEntityFragment>
}

const Highlight = ({ highlight }: HighlightProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  const {
    title,
    subtitle,
    dateFrom,
    dateTo,
    timeFrom,
    timeTo,
    place,
    placeTitle,
    placeAddress,
    slug,
    positions,
    override,
    perex,
    purchaseId,
    coverMedia,
  } = highlight.attributes

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: `#sidepanel${highlight.id}`,
      start: 'top bottom',
      end: 'bottom bottom',
      pin: `#articleDiv${highlight.id}`,
      pinSpacing: false,
      scrub: 0,
    })
  }, [highlight.id])

  const renderOverride = !!override?.highlightContent

  const renderEventDetailsSidepanel = !!(
    placeAddress ||
    isDefined(place?.data?.attributes) ||
    placeTitle ||
    isDefined(dateFrom) ||
    (positions && positions?.length > 0) ||
    perex ||
    getPurchaseId(highlight)
  )

  return (
    <article className="relative h-fit w-full">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="cursor-pointer"
        tabIndex={-1}
        id={`articleDiv${highlight.id ?? ''}`}
        onClick={() => router.push(`/detail/${slug}`)}
        onKeyDown={onEnterOrSpaceKeyDown(() => router.push(`/detail/${slug}`))}
      >
        <div
          className="flex h-[calc(100vh_-_var(--height-nav))] w-full items-center justify-center bg-gmbLightGray"
          id={`articleImg${highlight.id ?? ''}`}
        >
          {coverMedia?.data?.attributes?.url && (
            <img
              src={coverMedia.data.attributes.url}
              alt={coverMedia.data.attributes.alternativeText ?? ''}
              className="h-full w-full object-cover"
              id={`coverImage${highlight.id}`}
            />
          )}
        </div>
        <div
          className="absolute bottom-0 z-20 flex h-fit w-full py-yMd px-xMd lg:h-auto lg:pr-sidepanel"
          style={{ background: getContentPageColor(highlight) }}
        >
          <div className="flex flex-col items-start justify-between gap-y-yMd lg:mr-[5vw] ">
            <div>
              <h2 className="text-xxl lg:line-clamp-2">{title}</h2>
              <p className="text-xxl font-regular lg:line-clamp-1">{subtitle}</p>
            </div>

            {/* Basic info on mobile. It shows only datetime, place and Buy tickets btn, if no override is present.
                The classic sidepanel is not displayed on mobile screen. */}
            <div
              className={cx('flex w-full flex-1 flex-col justify-between gap-y-yMd justify-self-stretch lg:hidden', {
                hidden: renderOverride,
              })}
            >
              <div className="my-auto">
                <SidePanelTime datetime={{ dateFrom, dateTo, timeTo, timeFrom }} isOneLine noIcon />
              </div>

              <div className="mt-auto flex w-full flex-row items-stretch justify-evenly space-x-4">
                {getPurchaseId(highlight) && (
                  <Button size="small" className="w-fit flex-none" href={`/vstupenky/${slug}`}>
                    {t('common.buyTickets')}
                  </Button>
                )}
                {(placeTitle || place?.data?.attributes?.title) && (
                  <div className="flex flex-1 items-center justify-center">
                    <span className="text-btn uppercase">{placeTitle || place?.data?.attributes?.title}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Detail button on desktop */}
            <Button href={`/detail/${slug}`} className="hidden lg:flex" aria-label={title}>
              {t('common.detail')}
            </Button>
          </div>
        </div>
      </div>
      <div className={cx('z-15 relative ml-auto w-sidepanel bg-white', {})} id={`sidepanel${highlight.id}`}>
        {renderOverride && override?.highlightContent ? (
          /* If there is override, display it on both mobile and desktop */
          <div className="min-h-fit p-10">
            <SidePanel overrideText={override?.highlightContent} />
          </div>
        ) : renderEventDetailsSidepanel ? (
          /* If there is no override, display classic sidepanel on desktop */
          <div className="ml-auto hidden min-h-fit p-10 lg:block">
            <SidePanel
              datetime={{ dateFrom, dateTo, timeFrom, timeTo }}
              place={{ place, placeTitle, placeAddress }}
              slug={slug}
              positions={positions?.filter(isDefined).slice(0, 3)}
              purchaseId={getPurchaseId(highlight)}
              perex={perex ?? undefined}
            />
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default Highlight
