import cx from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import { HighlightsItemEntityFragment } from '../../graphql'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { isDefined, WithAttributes } from '../../utils/isDefined'
import Button from '../atoms/Button'
import { SidePanelTime } from '../atoms/SidePanelTime'
import SidePanel from './SidePanel'

interface HighlightProps {
  highlight: WithAttributes<HighlightsItemEntityFragment>
}

const Highlight = ({ highlight }: HighlightProps) => {
  const { t, i18n } = useTranslation()
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
    <article className="relative w-full h-fit">
      <div
        className="cursor-pointer group"
        id={`articleDiv${highlight.id}`}
        onClick={() => router.push(`/detail/${slug}`)}
      >
        <div
          className="flex items-center justify-center w-full h-[calc(100vh_-_var(--height-nav))] bg-gmbLightGray"
          id={`articleImg${highlight.id}`}
        >
          {coverMedia?.data?.attributes?.url && (
            <img
              src={coverMedia.data.attributes.url}
              alt={coverMedia.data.attributes.alternativeText ?? ''}
              className="object-cover w-full h-full"
              id={`coverImage${highlight.id}`}
            />
          )}
        </div>
        <div
          className={cx(
            'absolute bottom-0 z-20 w-full py-yStandard px-xStandard flex flex-col items-start gap-y-yStandard lg:pr-sidepanel min-h-[320px] h-fit lg:h-auto'
          )}
          id={`hgroup${highlight.id}`}
          style={{ background: getContentPageColor(highlight) }}
        >
          <hgroup>
            <h1 className="text-xxl">{title}</h1>
            <p className="font-regular text-xxl">{subtitle}</p>
          </hgroup>

          <div
            className={cx('lg:hidden w-full flex-1 justify-self-stretch justify-between flex flex-col', {
              hidden: renderOverride,
            })}
          >
            <div className="my-auto">
              <SidePanelTime datetime={{ dateFrom, dateTo, timeTo, timeFrom }} isOneLine noIcon />
            </div>

            <div className="flex flex-row items-stretch w-full mt-auto space-x-4 justify-evenly">
              {purchaseId && (
                <Button size="small" className="flex-none w-fit" href={`/vstupenky/${slug}`}>
                  {t('common.buyTickets')}
                </Button>
              )}
              {(placeTitle || place?.data?.attributes?.title) && (
                <div className="flex items-center justify-center flex-1">
                  <span className="uppercase">{placeTitle || place?.data?.attributes?.title}</span>
                </div>
              )}
            </div>
          </div>

          <Button href={`/detail/${slug}`} className="hidden group-hover:text-white group-hover:bg-gmbDark lg:flex">
            {t('common.detail')}
          </Button>
        </div>
      </div>
      <div className={cx('relative z-30 bg-white w-sidepanel ml-auto', {})} id={`sidepanel${highlight.id}`}>
        {renderOverride && override?.highlightContent ? (
          <div className="p-10 min-h-fit">
            <SidePanel overrideText={override?.highlightContent} />
          </div>
        ) : renderEventDetailsSidepanel ? (
          <div className="hidden p-10 ml-auto min-h-fit lg:block">
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
