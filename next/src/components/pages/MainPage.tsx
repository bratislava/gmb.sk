import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import Seo from '@/src/components/atoms/Seo'
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
  /* eslint-disable @typescript-eslint/no-unused-vars */
  exhibitions,
  permanentExhibitions,
  additionalProgram,
  places,
  tagsProgram,
  tagsTargetGroups,
  tagsLanguages,
  tagsProjects,
  tagsOthers,
  /* eslint-enable @typescript-eslint/no-unused-vars */
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
    <PageWrapper>
      <Seo seo={page?.seo} />
      <Head>
        <title>{`${title || ''} – Galéria mesta Bratislavy`}</title>
      </Head>

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

          if (
            section.__typename === 'ComponentSectionsPartnersSection' &&
            section.partners?.length
          ) {
            return (
              <PartnersSection
                title={t('common.partners')}
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

          return null
        })}
    </PageWrapper>
  )
}

export default MainPage
