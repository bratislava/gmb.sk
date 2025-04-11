import { useTranslation } from 'next-i18next'

import SeoHead from '@/src/components/atoms/SeoHead'
import DisclosureSection from '@/src/components/molecules/sections/DisclosureSection'
import ExhibitionArchiveSection from '@/src/components/molecules/sections/ExhibitionArchiveSection'
import ExhibitionsSection from '@/src/components/molecules/sections/ExhibitionsSection'
import ExploreSection from '@/src/components/molecules/sections/ExploreSection'
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
  MainPageEntityFragment,
  NewsItemEntityFragment,
  PlaceEntityFragment,
  SectionItemEntityFragment,
  TagEntityFragment,
  TicketEntityFragment,
} from '@/src/services/graphql'
import { getAnchor } from '@/src/utils/getAnchor'
import { hasAttributes, isDefined, WithAttributes } from '@/src/utils/isDefined'

type MainPageProps = {
  title: string
  page: MainPageEntityFragment
  newsItems?: WithAttributes<NewsItemEntityFragment>[] | null
  tickets?: WithAttributes<TicketEntityFragment>[] | null
  exhibitions?: WithAttributes<SectionItemEntityFragment>[]
  permanentExhibitions?: WithAttributes<SectionItemEntityFragment>[]
  additionalProgram?: WithAttributes<SectionItemEntityFragment>[]
  places?: WithAttributes<PlaceEntityFragment>[]
  tagsProgram?: WithAttributes<TagEntityFragment>[]
  tagsTargetGroups?: WithAttributes<TagEntityFragment>[]
  tagsLanguages?: WithAttributes<TagEntityFragment>[]
  tagsProjects?: WithAttributes<TagEntityFragment>[]
  tagsOthers?: WithAttributes<TagEntityFragment>[]
  tagsExploreTypes?: WithAttributes<TagEntityFragment>[]
  tagsExploreProjects?: WithAttributes<TagEntityFragment>[]
  tagsExploreOthers?: WithAttributes<TagEntityFragment>[]
}

const MainPage = ({
  title,
  page: pageEntity,
  newsItems,
  tickets,
  exhibitions,
  permanentExhibitions,
  additionalProgram,
  places,
  tagsProgram,
  tagsTargetGroups,
  tagsLanguages,
  tagsProjects,
  tagsOthers,
  tagsExploreTypes,
  tagsExploreProjects,
  tagsExploreOthers,
}: MainPageProps) => {
  const { t } = useTranslation()

  const page = pageEntity?.attributes

  if (!page) return null

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
    <PageWrapper page={hasAttributes(pageEntity) ? pageEntity : undefined}>
      <SeoHead title={title} seo={page?.seo} />

      {page?.sections ? <Submenu items={submenu} /> : null}

      {page?.sections
        ?.filter(isDefined)
        .filter(isDefined)
        // eslint-disable-next-line sonarjs/cognitive-complexity
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

          if (
            section.__typename === 'ComponentSectionsPartnersSection' &&
            section.partners?.length
          ) {
            return (
              <PartnersSection
                title={section?.title ?? t('common.partners')}
                anchor={getAnchor(section.submenuTitle)}
                partners={section.partners
                  ?.map((item) => item?.partner?.data)
                  ?.filter(hasAttributes)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsHighlightsSection') {
            return (
              <HighlightsSection
                highlights={section?.highlights
                  ?.map((highlight) => highlight?.contentPage?.data)
                  .filter(hasAttributes)}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsExploreSection') {
            return (
              <ExploreSection
                title={section.title ?? undefined}
                tagsTypes={tagsExploreTypes}
                tagsProjects={tagsExploreProjects}
                tagsOthers={tagsExploreOthers}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsExhibitionsSection') {
            return (
              <ExhibitionsSection
                title={section.title ?? undefined}
                archiveBannerSection={section?.archiveBannerSection}
                exhibitions={exhibitions}
                permanentExhibitions={permanentExhibitions}
                additionalProgram={additionalProgram}
                places={places}
                tagsProgram={tagsProgram}
                tagsTargetGroups={tagsTargetGroups}
                tagsLanguages={tagsLanguages}
                tagsProjects={tagsProjects}
                tagsOthers={tagsOthers}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsExhibitionArchiveSection') {
            return (
              <ExhibitionArchiveSection
                title={section.title ?? undefined}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          if (section.__typename === 'ComponentSectionsDisclosureSection') {
            return (
              <DisclosureSection
                title={section.title ?? undefined}
                anchor={getAnchor(section.submenuTitle)}
                additionalFilesSection={section?.additionalFilesSection}
                key={`${section.__typename}-${section.id}`}
              />
            )
          }

          return null
        })}
    </PageWrapper>
  )
}

export default MainPage
