import { HighlightsItemFragment } from '@bratislava/strapi-sdk-city-gallery';
import { getContentPageColor } from 'apps/next/city-gallery/utils/getContentPageColor';
import { isDefined } from 'apps/next/city-gallery/utils/isDefined';
import cx from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { getRouteForLocale } from '../../utils/localeRoutes';
import Button from '../atoms/Button';
import { SidePanelTime } from '../atoms/SidePanelTime';
import SidePanel from './SidePanel';

interface HighlightProps {
  highlight: HighlightsItemFragment;
}

const Highlight = ({ highlight }: HighlightProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const {
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
  } = highlight;

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.to(`#header${highlight.id}`, {
      bottom: '100vh',
      ease: 'none',
      scrollTrigger: {
        trigger: `#paralaxAnchor${highlight.id}`,
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: 0,
      },
    });
  }, [highlight.id]);

  const renderSidePanel =
    placeAddress ||
    place ||
    placeTitle ||
    dateFrom ||
    (positions && positions?.length > 0) ||
    perex ||
    override?.highlightContent ||
    purchaseId;

  const renderOverride = override?.highlightContent;

  return (
    <>
      <article
        className="sticky top-0 w-full h-screen max-h-screen mb-0 overflow-hidden cursor-pointer lg:max-h-full bottom-full lg:mb-auto group"
        onClick={() => router.push(`/detail/${highlight.slug}`)}
      >
        <div className="relative flex items-center justify-center w-full h-screen bg-gmbLightGray lg:h-full">
          {highlight?.coverMedia?.url && (
            <img
              src={highlight.coverMedia.url}
              alt={highlight.coverMedia.alternativeText ?? ''}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div
          className={cx(
            'w-full bottom-0 py-yStandard flex min-h-[320px] flex-col items-start lg:justify-between absolute z-2 pr-5 lg:pr-sidepanel h-fit lg:h-auto px-xStandard gap-y-yStandard',
            { 'justify-between': renderOverride }
          )}
          id={`header${highlight.id}`}
          style={{ background: getContentPageColor(highlight) }}
        >
          <hgroup>
            <h1 className="text-xxl">{highlight?.title}</h1>
            <p className="font-regular text-xxl">{highlight?.subtitle}</p>
          </hgroup>

          <div
            className={cx(
              'lg:hidden w-full flex-1 justify-self-stretch justify-between flex flex-col',
              {
                hidden: renderOverride,
              }
            )}
          >
            <div className="my-auto">
              <SidePanelTime
                datetime={{ dateFrom, dateTo, timeTo, timeFrom }}
                isOneLine
                noIcon
              />
            </div>

            <div className="flex flex-row items-stretch w-full mt-auto space-x-4 justify-evenly">
              {purchaseId && (
                <Button
                  size="small"
                  className="flex-none w-fit"
                  href={`${getRouteForLocale(
                    '/vstupenky',
                    i18n.language
                  )}/${slug}`}
                >
                  {t('common.buyTickets')}
                </Button>
              )}
              {(placeTitle || place?.title) && (
                <div className="flex items-center justify-center flex-1">
                  <span className="uppercase">
                    {placeTitle || place?.title}
                  </span>
                </div>
              )}
            </div>
          </div>

          <Button
            href={`/detail/${highlight.slug}`}
            className="hidden group-hover:text-white group-hover:bg-gmbDark lg:flex"
          >
            {t('common.detail')}
          </Button>
        </div>
      </article>

      {renderSidePanel && (
        <div
          className="relative z-10 hidden p-10 ml-auto bg-white min-h-fit w-sidepanel lg:flex"
          id={`sidepanel${highlight.id}`}
        >
          <SidePanel
            datetime={{ dateFrom, dateTo, timeFrom, timeTo }}
            place={{ place, placeTitle, placeAddress }}
            slug={slug}
            positions={positions?.filter(isDefined).slice(0, 3)}
            purchaseId={purchaseId}
            overrideText={override?.highlightContent ?? undefined}
            perex={perex ?? undefined}
          />
        </div>
      )}
      {/*Only for small screens (smaller than lg)*/}
      {renderOverride && (
        <div
          className="relative z-10 flex w-full p-10 ml-auto bg-white min-h-fit lg:hidden"
          id={`sidepanel${highlight.id}`}
        >
          <SidePanel overrideText={override?.highlightContent ?? undefined} />
        </div>
      )}
      <div id={`paralaxAnchor${highlight.id}`} />
    </>
  );
};

export default Highlight;
