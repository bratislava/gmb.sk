import { useTranslation } from 'next-i18next'

import Audio from '@/src/components/atoms/Audio'
import SeoHead from '@/src/components/atoms/SeoHead'
import Subtitle from '@/src/components/atoms/Subtitle'
import Video from '@/src/components/atoms/Video'
import ContactCard from '@/src/components/molecules/ContactCard'
import ImageGallery from '@/src/components/molecules/ImageGallery'
import ImgSwiper from '@/src/components/molecules/ImgSwiper'
import ChessboardSection from '@/src/components/molecules/sections/ChessboardSection'
import DownloadSection from '@/src/components/molecules/sections/DownloadSection'
import RichtextSection from '@/src/components/molecules/sections/RichtextSection'
import Section from '@/src/components/molecules/sections/Section'
import SidePanel from '@/src/components/molecules/SidePanel'
import Submenu from '@/src/components/molecules/Submenu'
import PageWrapper from '@/src/components/pages/PageWrapper'
import { ContentPageEntityFragment } from '@/src/services/graphql'
import { formatDateString } from '@/src/utils/formatDateString'
import { getAnchor } from '@/src/utils/getAnchor'
import { getContentPageColor } from '@/src/utils/getContentPageColor'
import getDaysLeft from '@/src/utils/getDaysLeft'
import { getPurchaseId } from '@/src/utils/getPurchaseId'
import { hasAttributes, isDefined, WithAttributes, withAttributes } from '@/src/utils/isDefined'

interface DetailPageProps {
  contentPage: WithAttributes<ContentPageEntityFragment>
}

const DetailPage = ({ contentPage }: DetailPageProps) => {
  const {
    title,
    titleToShow,
    addedAt,
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

  const { t, i18n } = useTranslation()

  // TODO Add parent page as related content, with option to not to include it :D
  const relatedContentFiltered =
    childPages?.data
      .filter(hasAttributes)
      .filter((child) =>
        child.attributes.dateTo ? getDaysLeft(child.attributes.dateTo) >= 0 : child
      )
      .sort((a, b) => (a.attributes.dateFrom > b.attributes.dateFrom ? 1 : -1)) ?? []

  const showRelatedContent = relatedContentFiltered.length > 0

  const submenu: string[] = []

  mainContent?.filter(isDefined).forEach((section) => {
    if ('submenuTitle' in section && section.submenuTitle) {
      submenu.push(section.submenuTitle)
    }
  })
  if (relatedContentSubmenuTitle && showRelatedContent) {
    submenu.push(relatedContentSubmenuTitle)
  }
  if (downloadSection?.submenuTitle) {
    submenu.push(downloadSection?.submenuTitle)
  }

  const seoImage = seo?.metaImage?.data || coverMedia?.data

  return (
    <PageWrapper contentPage={contentPage}>
      <SeoHead seo={seo} ogType="article" title={title} description={perex} image={seoImage} />

      <div
        className="px-xMd py-yMd lg:pr-sidepanel"
        style={{ background: getContentPageColor(contentPage) }}
      >
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
        {/* min-h is needed to keep sidepanel space even if sidepanel is empty */}
        <div className="float-right ml-xLg hidden min-h-px w-sidepanel lg:flex">
          <SidePanel
            datetime={{ dateFrom, dateTo, timeFrom, timeTo, showRemainingTime }}
            place={{ place, placeTitle, placeAddress }}
            positions={positions?.filter(isDefined)}
            partners={partners?.map((item) => item?.partner?.data).filter(hasAttributes)}
            purchaseId={getPurchaseId(contentPage)}
            slug={slug}
            showShare={showShare}
            title={title}
          />
        </div>
        {/* Mobile sidepanel info part 1 */}
        <SidePanel
          datetime={{ dateFrom, dateTo, timeFrom, timeTo, showRemainingTime }}
          place={{ place, placeTitle, placeAddress }}
          purchaseId={getPurchaseId(contentPage)}
          slug={slug}
          className="pb-yLg lg:hidden"
        />
        <div className="float-none w-auto overflow-hidden">
          {addedAt && (
            <div className="mb-yMd text-md">
              {t('common.addedAt')} {formatDateString(addedAt, i18n.language)}
            </div>
          )}

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
                  <Section
                    anchor={getAnchor(section.submenuTitle)}
                    key={section.id}
                    className="pb-yMd"
                  >
                    {section.title && <h3 className="pb-yMd text-lg">{section.title}</h3>}
                    {section.url ? <Video url={section.url} /> : null}
                  </Section>
                )
              }
              if (section.__typename === 'ComponentSectionsAudioSection') {
                return (
                  <Section
                    anchor={getAnchor(section.submenuTitle)}
                    key={section.id}
                    className="pb-yMd"
                  >
                    {section.title && <h3 className="pb-yMd text-lg">{section.title}</h3>}
                    {section.url ? <Audio url={section.url} /> : null}
                  </Section>
                )
              }
              if (section.__typename === 'ComponentSectionsGallerySection') {
                return (
                  <Section
                    anchor={getAnchor(section.submenuTitle)}
                    key={section.id}
                    className="pb-yMd"
                  >
                    {section.title && <h3 className="pb-yMd text-lg">{section.title}</h3>}
                    <ImageGallery medias={section.medias?.data} />
                  </Section>
                )
              }
              if (section.__typename === 'ComponentSectionsContactCardsSection') {
                return (
                  <Section
                    anchor={getAnchor(section.submenuTitle)}
                    key={section.id}
                    className="pb-yMd"
                  >
                    {section.title && <h2 className="pb-yMd text-xl">{section.title}</h2>}
                    {section.contacts?.map((contactItem, index) => (
                      <ContactCard
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        contact={withAttributes(contactItem?.contactCard?.data)}
                      />
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
      {relatedContentFiltered.length > 0 ? (
        <ChessboardSection
          anchor={getAnchor(relatedContentSubmenuTitle)}
          title={relatedContentTitle ?? undefined}
          sectionItems={relatedContentFiltered}
        />
      ) : null}
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
