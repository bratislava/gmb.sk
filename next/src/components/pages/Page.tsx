import { useTranslation } from 'next-i18next'

import SeoHead from '@/src/components/atoms/SeoHead'
import HighlightsSection from '@/src/components/molecules/sections/HighlightsSection'
import MapSection from '@/src/components/molecules/sections/MapSection'
import NewsletterSection from '@/src/components/molecules/sections/NewsletterSection'
import NewsSection from '@/src/components/molecules/sections/NewsSection'
import OpeningHoursSection from '@/src/components/molecules/sections/OpeningHoursSection'
import PageSectionContainer from '@/src/components/molecules/sections/PageSectionContainer'
import PartnersSection from '@/src/components/molecules/sections/PartnersSection'
import RichtextSection from '@/src/components/molecules/sections/RichtextSection'
import TicketsSection from '@/src/components/molecules/sections/TicketsSection'
import Submenu from '@/src/components/molecules/Submenu'
import PageWrapper from '@/src/components/pages/PageWrapper'
import {
  AboutUsPageQuery,
  CollectionPageQuery,
  GetInvolvedPageQuery,
  HomePageQuery,
  NewsItemEntityFragment,
  TicketEntityFragment,
  VisitUsPageQuery,
} from '@/src/services/graphql'
import { getAnchor } from '@/src/utils/getAnchor'
import { hasAttributes, isDefined, WithAttributes } from '@/src/utils/isDefined'

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
      <SeoHead title={title} seo={page?.seo} />

      <HighlightsSection
        highlights={page?.highlights
          ?.map((highlight) => highlight?.contentPage?.data)
          .filter(hasAttributes)}
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
              <NewsletterSection
                anchor={getAnchor(section.submenuTitle)}
                key={`${section.__typename}-${section.id}`}
              />
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
                className="px-xMd py-yMd"
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          return null
        })}

      {pageResponse?.data?.attributes?.__typename === 'HomePage' &&
      pageResponse.data?.attributes?.partners?.length ? (
        <PartnersSection
          title={t('common.partners')}
          partners={pageResponse.data?.attributes?.partners
            ?.map((item) => item?.partner?.data)
            ?.filter(hasAttributes)}
        />
      ) : null}
    </PageWrapper>
  )
}

export default Page
