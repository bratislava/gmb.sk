import Head from 'next/head'

import { ContactEntityFragment, ContentPageEntityFragment } from '../../graphql'
import { getAnchor } from '../../utils/getAnchor'
import { getContentPageColor } from '../../utils/getContentPageColor'
import { getPurchaseId } from '../../utils/getPurchaseId'
import { hasAttributes, isDefined, WithAttributes } from '../../utils/isDefined'
import Audio from '../atoms/Audio'
import Seo from '../atoms/Seo'
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
    positions,
    partners,
    relatedContentTitle,
    relatedContentSubmenuTitle,
    childPages,
    slider,
    downloadSection,
    seo,
    coverMedia,
  } = contentPage.attributes

  const submenu: string[] = []

  mainContent?.filter(isDefined).forEach((section) => {
    if ('submenuTitle' in section && section.submenuTitle) {
      submenu.push(section.submenuTitle)
    }
  })
  if (relatedContentSubmenuTitle && childPages?.data?.filter(hasAttributes).length) {
    submenu.push(relatedContentSubmenuTitle)
  }
  if (downloadSection?.submenuTitle) {
    submenu.push(downloadSection?.submenuTitle)
  }

  return (
    <div>
      {seo && <Seo seo={seo} ogType="article" title={title} description={perex} image={coverMedia?.data} />}
      <Head>
        <title>{title}</title>
        <>
          {/* TODO: Query author from strapi */}
          {/* <meta property="og:article:author" content="author" /> */}
          {/* "A high-level section name. E.g. Technology" */}
          {/* <meta property="og:article:section" content="Art and culture" /> */}
          {/* article:tag are an 'array' which means more of the same meta tags are allowed */}
          {/* <meta property="og:article:tag" content="tag1" /> */}
          {/* <meta property="og:article:tag" content="tag2" /> */}
        </>
      </Head>

      <hgroup className="py-yMd px-xMd" style={{ background: getContentPageColor(contentPage) }}>
        <h1 className="text-xxl">{title}</h1>
        <p className="text-xxl font-regular">{subtitle}</p>
      </hgroup>
      <Submenu items={submenu} />
      <div className="h-auto overflow-hidden px-xMd py-yLg">
        {/* Desktop sidepanel */}
        <SidePanel
          datetime={{ dateFrom, dateTo, timeFrom, timeTo, showRemainingTime }}
          place={{ place, placeTitle, placeAddress }}
          positions={positions?.filter(isDefined)}
          partners={partners?.map((item) => item?.partner?.data).filter(hasAttributes)}
          purchaseId={getPurchaseId(contentPage)}
          slug={slug}
          showShare
          title={title}
          className="float-right ml-[5vw] hidden w-sidepanel lg:block"
        />
        {/* Mobile sidepanel info part 1 */}
        <SidePanel
          datetime={{ dateFrom, dateTo, timeFrom, timeTo, showRemainingTime }}
          place={{ place, placeTitle, placeAddress }}
          purchaseId={getPurchaseId(contentPage)}
          slug={slug}
          className="pb-24 lg:hidden"
        />
        <div className="float-none w-auto overflow-hidden">
          {perex && <div className="mb-yLg text-lg">{perex}</div>}

          <div className="ml-xLg">
            {mainContent?.filter(isDefined).map((section) => {
              if (section.__typename === 'ComponentSectionsRichtextSection') {
                return (
                  <RichtextSection
                    anchor={getAnchor(section.submenuTitle)}
                    key={section.id}
                    content={section.content}
                    accentColor={getContentPageColor(contentPage)}
                  />
                )
              }
              if (section.__typename === 'ComponentSectionsVideoSection') {
                return (
                  <Section anchor={getAnchor(section.submenuTitle)} key={section.id} className="pb-yMd">
                    {section.title && <h3 className="pb-yMd text-lg">{section.title}</h3>}
                    {section.url ? <Video url={section.url} /> : null}
                  </Section>
                )
              }
              if (section.__typename === 'ComponentSectionsAudioSection') {
                return (
                  <Section anchor={getAnchor(section.submenuTitle)} key={section.id} className="pb-yMd">
                    {section.title && <h3 className="pb-yMd text-lg">{section.title}</h3>}
                    {section.url ? <Audio url={section.url} /> : null}
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
            partners={partners?.map((item) => item?.partner?.data).filter(hasAttributes)}
            slug={slug}
            showShare
            title={title}
          />
        </div>
      </div>
      {slider && <ImgSwiper slides={slider?.medias?.data.filter(hasAttributes)} />}
      {/* TODO Add parent page as related content */}
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
      {contactInfo && <Footer contactInfo={contactInfo} contentPage={contentPage} />}
    </div>
  )
}

export default DetailPage
