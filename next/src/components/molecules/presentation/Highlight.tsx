import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { useWindowSize } from 'usehooks-ts'

import Button from '@/src/components/atoms/Button'
import Link from '@/src/components/atoms/Link'
import { SidePanelTime } from '@/src/components/atoms/SidePanelTime'
import Subtitle from '@/src/components/atoms/Subtitle'
import SidePanel from '@/src/components/molecules/SidePanel'
import { HighlightsItemEntityFragment } from '@/src/services/graphql'
import cn from '@/src/utils/cn'
import { getBreakpointValue } from '@/src/utils/getBreakpointValue'
import { getContentPageColor } from '@/src/utils/getContentPageColor'
import { getPurchaseId } from '@/src/utils/getPurchaseId'
import { isDefined, WithAttributes } from '@/src/utils/isDefined'
import { onEnterOrSpaceKeyDown } from '@/src/utils/onEnterOrSpaceKeyDown'

interface HighlightProps {
  highlight: WithAttributes<HighlightsItemEntityFragment>
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const Highlight = ({ highlight }: HighlightProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  const { width: windowWidth } = useWindowSize()

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
      <div
        className="group flex h-[calc(100vh_-_var(--nav-height))] w-full cursor-pointer flex-col"
        tabIndex={-1}
        id={`articleDiv${highlight.id ?? ''}`}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => router.push(`/detail/${slug}`)}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onKeyDown={onEnterOrSpaceKeyDown(() => router.push(`/detail/${slug}`))}
      >
        <div className="relative flex grow cursor-pointer">
          <Image
            id={`articleImg${highlight.id ?? ''}`}
            src={coverMedia?.data?.attributes?.url ?? ''}
            alt={coverMedia?.data?.attributes?.alternativeText ?? ''}
            className="object-cover"
            fill
            priority
          />
        </div>
        <div
          className="h-fit w-full px-xMd py-yMd lg:h-auto lg:pr-sidepanel"
          style={{ background: getContentPageColor(highlight) }}
          id={`articleHeader${highlight.id ?? ''}`}
        >
          <div className="flex flex-col items-start justify-between gap-y-yMd lg:mr-xLg">
            <Link href={`/detail/${slug}`} preserveStyle stretched className="hover:no-underline">
              <h2 className="text-xxl md:whitespace-pre-wrap">{titleToShow || title}</h2>
              <p className="mt-1 text-xxl font-regular lg:mt-2">
                <Subtitle page={highlight} />
              </p>
            </Link>

            {/* Detail button on desktop */}
            <Button className="hidden lg:flex" tabIndex={-1} groupHover>
              {t('common.detail')}
            </Button>

            {/* Basic info on mobile. It shows only datetime, place and Buy tickets btn, if no override is present.
                The classic sidepanel is not displayed on mobile screen. */}
            <div
              className={cn(
                'flex w-full flex-1 flex-col justify-between gap-y-yMd justify-self-stretch lg:hidden',
                { hidden: renderOverride }
              )}
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
                    <span className="text-btn uppercase">
                      {placeTitle || place?.data?.attributes?.title}
                    </span>
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
