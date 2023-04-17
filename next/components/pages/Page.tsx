import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import {
  AboutUsPageQuery,
  CollectionPageQuery,
  GetInvolvedPageQuery,
  HomePageQuery,
  NewsItemEntityFragment,
  TicketEntityFragment,
  VisitUsPageQuery,
} from '../../graphql'
import { getAnchor } from '../../utils/getAnchor'
import { hasAttributes, isDefined, WithAttributes } from '../../utils/isDefined'
import Seo from '../atoms/Seo'
import HighlightsSection from '../molecules/sections/HighlightsSection'
import MapSection from '../molecules/sections/MapSection'
import NewsletterSection from '../molecules/sections/NewsletterSection'
import NewsSection from '../molecules/sections/NewsSection'
import OpeningHoursSection from '../molecules/sections/OpeningHoursSection'
import PageSectionContainer from '../molecules/sections/PageSectionContainer'
import PartnersSection from '../molecules/sections/PartnersSection'
import RichtextSection from '../molecules/sections/RichtextSection'
import TicketsSection from '../molecules/sections/TicketsSection'
import Submenu from '../molecules/Submenu'
import PageWrapper from './PageWrapper'

interface PageProps {
  page:
    | AboutUsPageQuery['aboutUsPage']
    | GetInvolvedPageQuery['getInvolvedPage']
    | VisitUsPageQuery['visitUsPage']
    | CollectionPageQuery['collectionsPage']
    | HomePageQuery['homePage']
  title: string
  newsItems?: WithAttributes<NewsItemEntityFragment>[] | null
  tickets?: WithAttributes<TicketEntityFragment>[] | null
}

const Page = ({ page: pageResponse, title, newsItems, tickets }: PageProps) => {
  const { t } = useTranslation()

  const page = pageResponse?.data?.attributes

  const submenu: string[] = []

  page?.sections
    ?.filter(isDefined)
    .filter(isDefined)
    .forEach((section) => {
      if ('submenuTitle' in section && section.submenuTitle) {
        submenu.push(section.submenuTitle)
      }
    })

  return (
    <PageWrapper>
      <Seo seo={page?.seo} />
      <Head>
        <title>{title}</title>
      </Head>

      <HighlightsSection
        highlights={page?.highlights?.map((highlight) => highlight?.contentPage?.data).filter(hasAttributes)}
      />

      {page?.sections && <Submenu items={submenu} />}

      {page?.sections
        ?.filter(isDefined)
        .filter(isDefined)
        .map((section) => {
          if (section.__typename === 'ComponentSectionsNewsSection' && newsItems) {
            return (
              <NewsSection
                items={newsItems}
                title={section.title ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsOpeningHoursSection') {
            return (
              <OpeningHoursSection
                anchor={getAnchor(section.submenuTitle)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsNewsletterSection') {
            return (
              <NewsletterSection anchor={getAnchor(section.submenuTitle)} key={`${section.__typename}-${section.id}`} />
            )
          }

          if (section.__typename === 'ComponentSectionsPageSection') {
            return (
              <PageSectionContainer
                section={section}
                anchor={getAnchor(section.submenuTitle)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsMapSection') {
            return (
              <MapSection
                title={section.title ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                key={`${section.__typename}-${section.id}`}
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
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsRichtextSection') {
            return (
              <RichtextSection
                content={section.content}
                anchor={getAnchor(section.submenuTitle)}
                className="py-yMd px-xMd"
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          return null
        })}

      {pageResponse?.data?.attributes?.__typename === 'HomePage' && pageResponse.data?.attributes?.partners?.length ? (
        <PartnersSection
          title={t('common.partners')}
          partners={pageResponse.data?.attributes?.partners?.map((item) => item?.partner?.data)?.filter(hasAttributes)}
        />
      ) : null}
    </PageWrapper>
  )
}

export default Page
