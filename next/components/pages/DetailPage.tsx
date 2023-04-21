import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { ContentPageEntityFragment } from '../../graphql'
import { getAnchor } from '../../utils/getAnchor'
import { getContentPageColor } from '../../utils/getContentPageColor'
import getDaysLeft from '../../utils/getDaysLeft'
import { getPurchaseId } from '../../utils/getPurchaseId'
import { hasAttributes, isDefined, WithAttributes, withAttributes } from '../../utils/isDefined'
import Audio from '../atoms/Audio'
import Seo from '../atoms/Seo'
import Subtitle from '../atoms/Subtitle'
import Video from '../atoms/Video'
import ContactCard from '../molecules/ContactCard'
import ImageGallery from '../molecules/ImageGallery'
import ImgSwiper from '../molecules/ImgSwiper'
import ChessboardSection from '../molecules/sections/ChessboardSection'
import DownloadSection from '../molecules/sections/DownloadSection'
import RichtextSection from '../molecules/sections/RichtextSection'
import Section from '../molecules/sections/Section'
import SidePanel from '../molecules/SidePanel'
import Submenu from '../molecules/Submenu'
import PageWrapper from './PageWrapper'

interface DetailPageProps {
  contentPage: WithAttributes<ContentPageEntityFragment>
}

const DetailPage = ({ contentPage }: DetailPageProps) => {
  const {
    title,
    titleToShow,
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
    showShareButtons,
    relatedContentTitle,
    relatedContentSubmenuTitle,
    childPages,
    slider,
    downloadSection,
    seo,
    coverMedia,
  } = contentPage.attributes

  // 'true' as fallback for older pages where showShareButtons is not defined
  const showShare = showShareButtons ?? true

  const { t } = useTranslation()

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

  const seoImage = seo?.metaImage?.data || coverMedia?.data

  return (
    <PageWrapper contentPage={contentPage}>
      <Seo seo={seo} ogType="article" title={title} description={perex} image={seoImage} />
      <Head>
        <title>{`${title} - ${t('common.bratislavaCityGallery')}`}</title>
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

      <div className="px-xMd py-yMd lg:pr-sidepanel" style={{ background: getContentPageColor(contentPage) }}>
        <div className="lg:mr-xLg">
          <h1 className="text-xxl md:whitespace-pre-wrap">{titleToShow || title}</h1>
          <p className="mt-1 text-xxl font-regular lg:mt-2">
            <Subtitle page={contentPage} />
          </p>
        </div>
      </div>
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
          showShare={showShare}
          title={title}
          className="float-right ml-xLg hidden w-sidepanel lg:flex"
        />
        {/* Mobile sidepanel info part 1 */}
        <SidePanel
          datetime={{ dateFrom, dateTo, timeFrom, timeTo, showRemainingTime }}
          place={{ place, placeTitle, placeAddress }}
          purchaseId={getPurchaseId(contentPage)}
          slug={slug}
          className="pb-yLg lg:hidden"
        />
        <div className="float-none w-auto overflow-hidden">
          {perex && <div className="mb-yLg text-lg">{perex}</div>}

          <div className="lg:ml-xLg">
            {mainContent?.filter(isDefined).map((section) => {
              if (section.__typename === 'ComponentSectionsRichtextSection') {
                return (
                  <RichtextSection
                    anchor={getAnchor(section.submenuTitle)}
                    key={section.id}
                    content={section.content}
                    accentColor={getContentPageColor(contentPage)}
                    className="pb-yMd"
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
              if (section.__typename === 'ComponentSectionsGallerySection') {
                return (
                  <Section anchor={getAnchor(section.submenuTitle)} key={section.id} className="pb-yMd">
                    {section.title && <h3 className="pb-yMd text-lg">{section.title}</h3>}
                    <ImageGallery medias={section.medias?.data} />
                  </Section>
                )
              }
              if (section.__typename === 'ComponentSectionsContactCardsSection') {
                return (
                  <Section anchor={getAnchor(section.submenuTitle)} key={section.id} className="pb-yMd">
                    {section.title && <h2 className="pb-yMd text-xl">{section.title}</h2>}
                    {section.contacts?.map((contactItem, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <ContactCard key={index} contact={withAttributes(contactItem?.contactCard?.data)} />
                    ))}
                  </Section>
                )
              }
              return null
            })}
          </div>
        </div>
        <div className="lg:hidden">
          {/* Mobile sidepanel info part 2 */}
          <SidePanel
            positions={positions?.filter(isDefined)}
            partners={partners?.map((item) => item?.partner?.data).filter(hasAttributes)}
            slug={slug}
            showShare={showShare}
            title={title}
            className="mt-yLg"
          />
        </div>
      </div>
      {slider && <ImgSwiper slides={slider?.medias?.data.filter(hasAttributes)} />}
      {/* TODO Add parent page as related content */}
      {childPages && childPages.data.length > 0 && (
        <ChessboardSection
          anchor={getAnchor(relatedContentSubmenuTitle)}
          title={relatedContentTitle ?? undefined}
          sectionItems={childPages.data
            .filter(hasAttributes)
            .filter((child) => (child.attributes.dateTo ? getDaysLeft(child.attributes.dateTo) >= 0 : child))
            .sort((a, b) => (a.attributes.dateFrom > b.attributes.dateFrom ? 1 : -1))}
        />
      )}
      {downloadSection && (
        <DownloadSection
          title={downloadSection.title}
          files={downloadSection.files?.filter(isDefined)}
          anchor={getAnchor(downloadSection.submenuTitle)}
        />
      )}
    </PageWrapper>
  )
}

export default DetailPage
