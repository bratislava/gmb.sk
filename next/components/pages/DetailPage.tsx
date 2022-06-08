import { isError } from 'lodash'
import Head from 'next/head'
import React from 'react'
import { ContactEntityFragment, ContentPageEntityFragment } from '../../graphql'
import { getAnchor } from '../../utils/getAnchor'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { hasAttributes, isDefined, WithAttributes } from '../../utils/isDefined'
import Video from '../atoms/Video'
import Footer from '../molecules/Footer'
import ImgSwiper from '../molecules/ImgSwiper'
import ChessboardSection from '../molecules/sections/ChessboardSection'
import DownloadSection from '../molecules/sections/DownloadSection'
import RichtextSection from '../molecules/sections/RichtextSection'
import Section from '../molecules/sections/Section'
import SidePanel from '../molecules/SidePanel'
import Submenu from '../molecules/Submenu'

interface DetailPageProps {
  contentPage: WithAttributes<ContentPageEntityFragment>
  contactInfo: WithAttributes<ContactEntityFragment> | null | undefined
}

const DetailPage = ({ contentPage, contactInfo }: DetailPageProps) => {
  const {
    title,
    subtitle,
    perex,
    slug,
    mainContent,
    dateFrom,
    dateTo,
    timeFrom,
    timeTo,
    showRemainingTime,
    place,
    placeTitle,
    placeAddress,
    purchaseId,
    positions,
    partners,
    relatedContentTitle,
    relatedContentSubmenuTitle,
    childPages,
    slider,
    downloadSection,
    seo,
  } = contentPage.attributes

  let submenu: string[] = []

  const definedSections = mainContent?.filter(isDefined)

  const definedWithoutError = definedSections?.filter((section) => isError(section))
  const sectionsWithSubtitle = definedWithoutError?.filter((section) => {
    section
  })

  // mainContent
  //   ?.filter(isDefined)
  //   .filter((section) => section.submenuTitle)
  //   .forEach((section) => {
  //     if (section.submenuTitle) {
  //       submenu.push(section.submenuTitle);
  //     }
  //   });
  if (relatedContentSubmenuTitle && childPages?.data?.filter(hasAttributes).length) {
    submenu.push(relatedContentSubmenuTitle)
  }
  if (downloadSection?.submenuTitle) {
    submenu.push(downloadSection?.submenuTitle)
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <>
          <meta name="title" content={seo?.metaTitle ?? title} />
          <meta name="description" content={seo?.metaDescription ?? perex ?? ''} />
          <meta name="keywords" content={seo?.keywords ?? ''} />
          <meta name="viewport" content={seo?.metaViewport ?? 'width=device-width, initial-scale=1'} />
          <meta name="robots" content={seo?.metaRobots ?? ''} />
          <meta name="canonical" content={seo?.canonicalUrl ?? ''} />
        </>
      </Head>

      <hgroup className="py-yStandard px-xStandard" style={{ background: getContentPageColor(contentPage) }}>
        <h1 className="text-xxl">{title}</h1>
        <p className="font-regular text-xxl">{subtitle}</p>
      </hgroup>
      <Submenu items={submenu} />
      <div className="h-auto gap-10 overflow-hidden px-xStandard py-yHigh">
        {/* Desktop sidepanel */}
        <SidePanel
          datetime={{ dateFrom, dateTo, timeFrom, timeTo, showRemainingTime }}
          place={{ place, placeTitle, placeAddress }}
          positions={positions?.filter(isDefined)}
          partners={partners?.data.filter(hasAttributes)}
          purchaseId={purchaseId}
          slug={slug}
          showShare
          title={title}
          className="hidden float-right ml-[5vw] lg:block w-[var(--sidepanel-width)]"
        />
        {/* Mobile sidepanel info part 1 */}
        <SidePanel
          datetime={{ dateFrom, dateTo, timeFrom, timeTo, showRemainingTime }}
          place={{ place, placeTitle, placeAddress }}
          purchaseId={purchaseId}
          slug={slug}
          className="pb-24 lg:hidden"
        />
        <div className="float-none w-auto overflow-hidden">
          {perex && <div className="text-lg mb-14 lg:mb-21 3xl:mb-28">{perex}</div>}

          <div className="lg:ml-[5vw] 3xl:ml-25">
            {mainContent?.filter(isDefined).map((section, index) => {
              if (section.__typename === 'ComponentSectionsRichtextSection') {
                return (
                  <RichtextSection
                    anchor={getAnchor(section.submenuTitle)}
                    key={index}
                    content={section.content}
                    accentColor={getContentPageColor(contentPage)}
                  />
                )
              }
              if (section.__typename === 'ComponentSectionsVideoSection') {
                return (
                  <Section anchor={getAnchor(section.submenuTitle)} key={index}>
                    <h3 className="pb-8 mt-10 text-lg">{section.title}</h3>
                    {section.url ? <Video url={section.url} className="mb-10" /> : null}
                  </Section>
                )
              }
            })}
          </div>
        </div>
        <div className="lg:hidden">
          {/* Mobile sidepanel info part 2 */}
          <SidePanel
            positions={positions?.filter(isDefined)}
            partners={partners?.data.filter(hasAttributes)}
            slug={slug}
            showShare
            title={title}
          />
        </div>
      </div>
      {slider && <ImgSwiper slides={slider?.medias?.data.filter(hasAttributes)} />}
      {/*TODO Add parent page as related content*/}
      {childPages && childPages.data.length > 0 && (
        <ChessboardSection
          anchor={getAnchor(relatedContentSubmenuTitle)}
          title={relatedContentTitle ?? undefined}
          sectionItems={childPages.data.filter(hasAttributes)}
        />
      )}
      {downloadSection && (
        <DownloadSection
          title={downloadSection.title}
          files={downloadSection.files?.filter(isDefined)}
          anchor={getAnchor(downloadSection.submenuTitle)}
        />
      )}
      {contactInfo && <Footer contactInfo={contactInfo} />}
    </div>
  )
}

export default DetailPage
