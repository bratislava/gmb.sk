import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import React from 'react'
import {
  AboutUsPageQuery,
  CollectionPageQuery,
  ContactEntityFragment,
  GetInvolvedPageQuery,
  HomePageQuery,
  NewsItemEntityFragment,
  TicketEntityFragment,
  VisitUsPageQuery,
} from '../../graphql'
import { getAnchor } from '../../utils/getAnchor'
import { hasAttributes, isDefined, WithAttributes, withAttributes } from '../../utils/isDefined'
import Footer from '../molecules/Footer'
import ContactSection from '../molecules/sections/ContactSection'
import HighlightsSection from '../molecules/sections/HighlightsSection'
import MapSection from '../molecules/sections/MapSection'
import NewsletterSection from '../molecules/sections/NewsletterSection'
import NewsSection from '../molecules/sections/NewsSection'
import PageSectionContainer from '../molecules/sections/PageSectionContainer'
import PartnersSection from '../molecules/sections/PartnersSection'
import RichtextSection from '../molecules/sections/RichtextSection'
import TicketsSection from '../molecules/sections/TicketsSection'
import Submenu from '../molecules/Submenu'

interface PageProps {
  page:
    | AboutUsPageQuery['aboutUsPage']
    | GetInvolvedPageQuery['getInvolvedPage']
    | VisitUsPageQuery['visitUsPage']
    | CollectionPageQuery['collectionsPage']
    | HomePageQuery['homePage']
  title: string
  contactInfo: WithAttributes<ContactEntityFragment> | null | undefined
  newsItems?: WithAttributes<NewsItemEntityFragment>[] | null
  tickets?: WithAttributes<TicketEntityFragment>[] | null
}

const Page = ({ page: pageResponse, title, contactInfo, newsItems, tickets }: PageProps) => {
  const { t } = useTranslation()

  const page = pageResponse?.data?.attributes

  let submenu: string[] = []

  page?.sections
    ?.filter(isDefined)
    .filter(isDefined)
    .forEach((section) => {
      if ('submenuTitle' in section && section.submenuTitle) {
        submenu.push(section.submenuTitle)
      }
    })

  return (
    <>
      <Head>
        <title>{title}</title>
        {page?.seo && (
          <>
            <meta name="title" content={page.seo.metaTitle ?? title} />
            <meta name="description" content={page.seo.metaDescription ?? ''} />
            <meta name="keywords" content={page.seo.keywords ?? ''} />
            <meta name="viewport" content={page.seo.metaViewport ?? 'width=device-width, initial-scale=1'} />
            <meta name="robots" content={page.seo.metaRobots ?? ''} />
            <meta name="canonical" content={page.seo.canonicalUrl ?? ''} />
          </>
        )}
      </Head>

      <HighlightsSection
        highlights={page?.highlights?.map((highlight) => highlight?.contentPage?.data).filter(hasAttributes)}
      />

      {page?.sections && <Submenu items={submenu} />}

      {page?.sections
        ?.filter(isDefined)
        .filter(isDefined)
        .map((section, index) => {
          if (section.__typename === 'ComponentSectionsNewsSection' && newsItems) {
            return (
              <NewsSection
                items={newsItems}
                title={section.title ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                key={index}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsContactSection' && hasAttributes(contactInfo)) {
            return (
              <ContactSection
                contactInfo={withAttributes(contactInfo)}
                anchor={getAnchor(section.submenuTitle)}
                key={index}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsNewsletterSection') {
            return <NewsletterSection anchor={getAnchor(section.submenuTitle)} key={index} />
          }

          if (section.__typename === 'ComponentSectionsPageSection') {
            return <PageSectionContainer section={section} anchor={getAnchor(section.submenuTitle)} key={index} />
          }

          if (section.__typename === 'ComponentSectionsMapSection') {
            return (
              <MapSection
                contactInfo={contactInfo ?? undefined}
                title={section.title ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                key={index}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsTicketsSection' && tickets) {
            return (
              <TicketsSection
                title={section.title ?? undefined}
                text={section.text ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                tickets={tickets}
                key={index}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsRichtextSection') {
            return (
              <RichtextSection
                content={section.content}
                anchor={getAnchor(section.submenuTitle)}
                className="py-yStandard px-xStandard"
                key={index}
              />
            )
          }
        })}

      {pageResponse?.__typename === 'HomePageEntityResponse' && pageResponse.data?.attributes?.partnersSection ? (
        <PartnersSection
          title={t('common.partners')}
          partners={pageResponse.data?.attributes?.partnersSection?.partners?.data.filter(hasAttributes)}
        />
      ) : null}

      {contactInfo && <Footer contactInfo={contactInfo} />}
    </>
  )
}

export default Page
