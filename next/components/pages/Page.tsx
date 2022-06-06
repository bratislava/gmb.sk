import {
  AboutUsPageQuery,
  CollectionPageQuery,
  ContactAndFooterFragment,
  GetInvolvedPageQuery,
  HomePageQuery,
  NewsItemFragment,
  VisitUsPageQuery,
} from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import { Ticket } from '../../types/ticket';
import { getAnchor } from '../../utils/getAnchor';
import { isDefined } from '../../utils/isDefined';
import Footer from '../molecules/Footer';
import Highlight from '../molecules/Highlight';
import ContactSection from '../molecules/sections/ContactSection';
import MapSection from '../molecules/sections/MapSection';
import NewsletterSection from '../molecules/sections/NewsletterSection';
import NewsSection from '../molecules/sections/NewsSection';
import PageSectionContainer from '../molecules/sections/PageSectionContainer';
import PartnersSection from '../molecules/sections/PartnersSection';
import RichtextSection from '../molecules/sections/RichtextSection';
import TicketsSection from '../molecules/sections/TicketsSection';
import Submenu from '../molecules/Submenu';

interface PageProps {
  page:
    | AboutUsPageQuery['aboutPage']
    | GetInvolvedPageQuery['getInvolvedPage']
    | VisitUsPageQuery['visitUsPage']
    | CollectionPageQuery['collectionsPage']
    | HomePageQuery['homepage'];
  title: string;
  contactInfo?: ContactAndFooterFragment | null;
  newsItems?: NewsItemFragment[] | null;
  tickets?: Ticket[] | null;
}

const Page = ({ page, title, contactInfo, newsItems, tickets }: PageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{title}</title>
        {page?.seo && (
          <>
            <meta name="title" content={page.seo.metaTitle ?? title} />
            <meta name="description" content={page.seo.metaDescription ?? ''} />
            <meta name="keywords" content={page.seo.keywords ?? ''} />
            <meta
              name="viewport"
              content={
                page.seo.metaViewport ?? 'width=device-width, initial-scale=1'
              }
            />
            <meta name="robots" content={page.seo.metaRobots ?? ''} />
            <meta name="canonical" content={page.seo.canonicalUrl ?? ''} />
          </>
        )}
      </Head>

      {page?.highlights?.contentPages?.filter(isDefined).map((item) => (
        <Highlight key={item.id} highlight={item} />
      ))}

      {page?.sections && (
        <Submenu
          items={page?.sections
            .filter(isDefined)
            .filter(isDefined)
            .filter((section) => section.submenuTitle)
            .map((section) => section.submenuTitle!)}
        />
      )}

      {page?.sections
        ?.filter(isDefined)
        .filter(isDefined)
        .map((section, index) => {
          if (
            section.__typename === 'ComponentSectionsNewsSection' &&
            newsItems
          ) {
            return (
              <NewsSection
                items={newsItems}
                title={section.title ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                key={index}
              />
            );
          }

          if (
            section.__typename === 'ComponentSectionsContactSection' &&
            contactInfo
          ) {
            return (
              <ContactSection
                contactInfo={contactInfo}
                anchor={getAnchor(section.submenuTitle)}
                key={index}
              />
            );
          }

          if (section.__typename === 'ComponentSectionsNewsletter') {
            return (
              <NewsletterSection
                anchor={getAnchor(section.submenuTitle)}
                key={index}
              />
            );
          }

          if (section.__typename === 'ComponentSectionsPageSection') {
            return (
              <PageSectionContainer
                section={section}
                anchor={getAnchor(section.submenuTitle)}
                key={index}
              />
            );
          }

          if (section.__typename === 'ComponentSectionsMapSection') {
            return (
              <MapSection
                contactInfo={contactInfo ?? undefined}
                title={section.title ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                key={index}
              />
            );
          }

          if (
            section.__typename === 'ComponentSectionsTicketsSection' &&
            tickets
          ) {
            return (
              <TicketsSection
                title={section.title ?? undefined}
                text={section.text ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                tickets={tickets}
                key={index}
              />
            );
          }

          if (section.__typename === 'ComponentSectionsRichtextSection') {
            return (
              <RichtextSection
                content={section.content}
                anchor={getAnchor(section.submenuTitle)}
                className="py-yStandard px-xStandard"
                key={index}
              />
            );
          }
        })}

      {page?.__typename === 'Homepage' && page?.partnersSection ? (
        <PartnersSection
          title={t('common.partners')}
          partners={page?.partnersSection?.partners?.filter(isDefined)}
        />
      ) : null}

      {contactInfo && <Footer contactInfo={contactInfo} />}
    </>
  );
};

export default Page;
