import cx from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { HighlightsItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
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

  React.useEffect(() => {
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
    purchaseId
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
          className={cx(
            'absolute bottom-0 z-20 w-full py-yMd px-xMd flex flex-col items-start justify-between gap-y-yMd lg:pr-sidepanel h-fit lg:h-auto'
          )}
          style={{ background: getContentPageColor(highlight) }}
        >
          <div className="max-w-lg">
            <h2 className="text-xxl">{title}</h2>
            <p className="text-xxl font-regular">{subtitle}</p>
          </div>

          <div
            className={cx('lg:hidden w-full flex-1 justify-self-stretch gap-y-yMd justify-between flex flex-col', {
              hidden: renderOverride,
            })}
          >
            <div className="my-auto">
              <SidePanelTime datetime={{ dateFrom, dateTo, timeTo, timeFrom }} isOneLine noIcon />
            </div>

            <div className="mt-auto flex w-full flex-row items-stretch justify-evenly space-x-4">
              {purchaseId && (
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

          <Button
            href={`/detail/${slug}`}
            className="mt-yLg hidden after:absolute after:inset-0 after:top-[calc(-100vh_-_var(--height-nav))] lg:flex"
            aria-label={title}
          >
            {t('common.detail')}
          </Button>
        </div>
      </div>
      <div className={cx('relative z-15 bg-white w-sidepanel ml-auto', {})} id={`sidepanel${highlight.id}`}>
        {renderOverride && override?.highlightContent ? (
          <div className="min-h-fit p-10">
            <SidePanel overrideText={override?.highlightContent} />
          </div>
        ) : renderEventDetailsSidepanel ? (
          <div className="ml-auto hidden min-h-fit p-10 lg:block">
            <SidePanel
              datetime={{ dateFrom, dateTo, timeFrom, timeTo }}
              place={{ place, placeTitle, placeAddress }}
              slug={slug}
              positions={positions?.filter(isDefined).slice(0, 3)}
              purchaseId={purchaseId}
              perex={perex ?? undefined}
            />
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default Highlight
