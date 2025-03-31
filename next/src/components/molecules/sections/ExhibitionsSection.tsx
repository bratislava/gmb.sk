import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import Button from '@/src/components/atoms/Button'
import Filters from '@/src/components/molecules/Filters'
import ArchiveBannerSection from '@/src/components/molecules/sections/ArchiveBannerSection'
import CardSection from '@/src/components/molecules/sections/CardSection'
import ChessboardSection from '@/src/components/molecules/sections/ChessboardSection'
import Section from '@/src/components/molecules/sections/Section'
import Submenu from '@/src/components/molecules/Submenu'
import {
  ExhibitionsSectionFragment,
  PlaceEntityFragment,
  SectionItemEntityFragment,
  TagEntityFragment,
} from '@/src/services/graphql'
import { getAnchor } from '@/src/utils/getAnchor'
import { isDefined, WithAttributes } from '@/src/utils/isDefined'
import { usePreviewsByTags } from '@/src/utils/usePreviewsByTags'

type ExhibitionsSectionProps = {
  title?: string
  archiveBannerSection?: ExhibitionsSectionFragment['archiveBannerSection']
  exhibitions?: WithAttributes<SectionItemEntityFragment>[]
  permanentExhibitions?: WithAttributes<SectionItemEntityFragment>[]
  additionalProgram?: WithAttributes<SectionItemEntityFragment>[]
  places?: WithAttributes<PlaceEntityFragment>[]
  tagsProgram?: WithAttributes<TagEntityFragment>[]
  tagsTargetGroups?: WithAttributes<TagEntityFragment>[]
  tagsLanguages?: WithAttributes<TagEntityFragment>[]
  tagsProjects?: WithAttributes<TagEntityFragment>[]
  tagsOthers?: WithAttributes<TagEntityFragment>[]
}

const ExhibitionsSection = ({
  title,
  archiveBannerSection,
  exhibitions,
  permanentExhibitions,
  additionalProgram,
  places,
  tagsProgram,
  tagsTargetGroups,
  tagsLanguages,
  tagsProjects,
  tagsOthers,
}: ExhibitionsSectionProps) => {
  const { t, i18n } = useTranslation()
  const { query } = useRouter()

  const [activeTags, setActiveTags] = useState<string[]>([])
  const [activePlaces, setActivePlaces] = useState<string[]>([])
  const initialTags = tagsProgram?.map((tag) => tag.attributes.slug) ?? []

  const { size, setSize, filteredPages, isLoadingInitialData, isReachingEnd, isLoadingMore } =
    usePreviewsByTags({
      activeTags: activeTags.length > 0 ? activeTags : initialTags,
      activePlaces,
      locale: i18n.language,
      kind: 'program',
    })

  /** This useEffect sets filters by the query that appears when someone clicks on a tag in Card or ChessboardTile. */
  useEffect(() => {
    const { tags } = query
    if (!tags) {
      return
    }
    setActivePlaces([])
    if (typeof tags === 'string') {
      setActiveTags([tags])
    } else {
      setActiveTags(tags)
    }
  }, [query])

  /** 'Archive' is not a real tag that has a relationship with the content page. Instead, if Archive is applied
   *  as an active tag, it adds a variable 'today' that will be used to show only content that has either `dateTo` in the past (exhibition that has ended)
   *  or `dateFrom` in the past AND dateTo null, which means it was only a one-day event. All other tags still apply while archive is active.
   */
  const archiveTagEntity: WithAttributes<TagEntityFragment> = {
    __typename: 'TagEntity',
    attributes: {
      __typename: 'Tag',
      title: i18n.language === 'sk' ? 'Archív' : 'Archive',
      slug: 'archive',
    },
  }

  return (
    <Section title={title}>
      <Submenu
        items={[
          t('common.exhibitions'),
          t('common.additionalProgram'),
          t('common.permanentExhibitions'),
          archiveBannerSection?.submenuTitle,
        ].filter(isDefined)}
        clearFilters={() => {
          setActiveTags([])
          setActivePlaces([])
        }}
        filters={
          <Filters
            tagGroups={[
              tagsProgram ?? [],
              tagsTargetGroups ?? [],
              tagsLanguages ?? [],
              tagsProjects ?? [],
              tagsOthers ?? [],
              [archiveTagEntity],
            ]}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
            places={places}
            activePlaces={activePlaces}
            setActivePlaces={setActivePlaces}
          />
        }
      />

      {activeTags.length > 0 || activePlaces.length > 0 ? (
        <div className="relative min-h-screen bg-white">
          {/* List all selected tags for screen readers */}
          <div className="sr-only">
            {`${t('common.filteredBy')}: `}
            {[...activeTags, ...activePlaces].map(
              (tag, index) =>
                `${tag}${index === [...activeTags, ...activePlaces].length - 1 ? '' : ', '} `
            )}
          </div>
          <CardSection
            sectionItems={filteredPages}
            isLoading={isLoadingInitialData}
            loadmoreButton={
              !isReachingEnd && (
                <div className="flex justify-center py-12">
                  {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                  <Button onClick={() => setSize(size + 1)} disabled={isLoadingMore}>
                    {t('common.exploreMoreContent')}
                  </Button>
                </div>
              )
            }
            showTags
          />
        </div>
      ) : (
        <>
          <ChessboardSection
            title={t('common.exhibitions')}
            sectionItems={exhibitions}
            anchor={getAnchor(t('common.exhibitions'))}
          />
          <CardSection
            title={t('common.additionalProgram')}
            sectionItems={additionalProgram}
            anchor={getAnchor(t('common.additionalProgram'))}
            showTags
          />
          <ChessboardSection
            title={t('common.permanentExhibitions')}
            sectionItems={permanentExhibitions}
            anchor={getAnchor(t('common.permanentExhibitions'))}
          />
          {archiveBannerSection ? (
            <ArchiveBannerSection
              title={archiveBannerSection?.title ?? undefined}
              anchor={getAnchor(archiveBannerSection?.submenuTitle)}
              banner={archiveBannerSection?.banner}
            />
          ) : null}
        </>
      )}
    </Section>
  )
}

export default ExhibitionsSection
