import cx from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useId } from 'react'
import { useWindowSize } from 'rooks'

import { HighlightsItemEntityFragment } from '../../../graphql'
import { getBreakpointValue } from '../../../utils/getBreakpointValue'
import { getContentPageColor } from '../../../utils/getContentPageColor'
import { getPurchaseId } from '../../../utils/getPurchaseId'
import { isDefined, WithAttributes } from '../../../utils/isDefined'
import Button from '../../atoms/Button'
import { SidePanelTime } from '../../atoms/SidePanelTime'
import Subtitle from '../../atoms/Subtitle'
import SidePanel from '../SidePanel'

interface HighlightProps {
  highlight: WithAttributes<HighlightsItemEntityFragment>
  isPriority?: boolean
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const Highlight = ({ highlight, isPriority }: HighlightProps) => {
  const { t } = useTranslation()
  const titleId = useId()

  const { innerWidth: windowWidth } = useWindowSize()

  const {
    title,
    titleToShow,
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
    coverMedia,
  } = highlight.attributes

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    if (highlight.id && windowWidth && windowWidth >= getBreakpointValue('lg')) {
      ScrollTrigger.create({
        trigger: `#sidepanel${highlight.id}`,
        start: 'top bottom',
        end: 'bottom bottom',
        pin: `#articleHeader${highlight.id}`,
        pinSpacing: false,
        scrub: 0,
      })
      ScrollTrigger.create({
        trigger: `#sidepanel${highlight.id}`,
        start: 'top bottom',
        pin: `#articleImg${highlight.id}`,
        pinSpacing: false,
        scrub: 0,
      })
    }
  }, [highlight.id, windowWidth])

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
    <article className="relative h-fit w-full bg-gmbLightGray">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="flex h-[calc(100vh_-_var(--nav-height))] w-full flex-col" id={`articleDiv${highlight.id ?? ''}`}>
        <div className="relative flex grow">
          <Image
            id={`articleImg${highlight.id ?? ''}`}
            src={coverMedia?.data?.attributes?.url ?? ''}
            alt={coverMedia?.data?.attributes?.alternativeText ?? ''}
            className="object-cover"
            fill
            priority={isPriority}
          />
        </div>
        <div
          className="h-fit w-full py-yMd px-xMd lg:h-auto lg:pr-sidepanel"
          style={{ background: getContentPageColor(highlight) }}
          id={`articleHeader${highlight.id ?? ''}`}
        >
          <div className="flex flex-col items-start justify-between gap-y-yMd lg:mr-xLg">
            <div id={titleId}>
              <h2 className="text-xxl md:whitespace-pre-wrap">{titleToShow || title}</h2>
              <p className="mt-1 text-xxl font-regular lg:mt-2">
                <Subtitle page={highlight} />
              </p>
            </div>

            {/* Detail button on desktop */}
            <Button href={`/detail/${slug}`} className="hidden lg:flex" stretched aria-labelledby={titleId}>
              {t('common.detail')}
            </Button>

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
                  <div className="flex flex-1 items-center justify-start">
                    <span className="text-btn uppercase">{placeTitle || place?.data?.attributes?.title}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ml-auto w-sidepanel bg-white" id={`sidepanel${highlight.id ?? ''}`}>
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
