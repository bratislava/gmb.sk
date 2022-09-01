import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import {
  ExhibitionsPageQuery,
  GeneralEntityFragment,
  PlaceEntityFragment,
  SectionItemEntityFragment,
  TagEntityFragment,
} from '../../graphql'
import { getAnchor } from '../../utils/getAnchor'
import { hasAttributes, WithAttributes } from '../../utils/isDefined'
import { usePreviewsByTags } from '../../utils/usePreviewsByTags'
import Button from '../atoms/Button'
import Seo from '../atoms/Seo'
import Filters from '../molecules/Filters'
import Footer from '../molecules/Footer'
import CardSection from '../molecules/sections/CardSection'
import ChessboardSection from '../molecules/sections/ChessboardSection'
import HighlightsSection from '../molecules/sections/HighlightsSection'
import NewsletterSection from '../molecules/sections/NewsletterSection'
import Submenu from '../molecules/Submenu'

interface ExhibitionsPageProps {
  exhibitionsPage: ExhibitionsPageQuery['exhibitionsPage']
  exhibitions?: WithAttributes<SectionItemEntityFragment>[]
  permanentExhibitions?: WithAttributes<SectionItemEntityFragment>[]
  additionalProgram?: WithAttributes<SectionItemEntityFragment>[]
  contactInfo?: WithAttributes<GeneralEntityFragment> | null
  tagsProgram?: WithAttributes<TagEntityFragment>[]
  tagsTargetGroups?: WithAttributes<TagEntityFragment>[]
  tagsLanguages?: WithAttributes<TagEntityFragment>[]
  tagsProjects?: WithAttributes<TagEntityFragment>[]
  tagsOthers?: WithAttributes<TagEntityFragment>[]
  places?: WithAttributes<PlaceEntityFragment>[]
}

const ExhibitionsPage = ({
  exhibitionsPage,
  exhibitions,
  permanentExhibitions,
  additionalProgram,
  contactInfo,
  tagsProgram,
  tagsTargetGroups,
  tagsLanguages,
  tagsProjects,
  tagsOthers,
  places,
}: ExhibitionsPageProps) => {
  const { t, i18n } = useTranslation()
  const { query } = useRouter()

  const [activeTags, setActiveTags] = useState<string[]>([])
  const [activePlaces, setActivePlaces] = useState<string[]>([])
  const initialTags = tagsProgram?.map((tag) => tag.attributes.slug) ?? []

  const { size, setSize, filteredPages, isLoadingInitialData, isReachingEnd, isLoadingMore } = usePreviewsByTags({
    activeTags: activeTags.length > 0 ? activeTags : initialTags,
    activePlaces,
    locale: i18n.language,
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

  const seo = exhibitionsPage?.data?.attributes?.seo

  /** 'Archive' is not a real tag that has a relationship with the content page. Instead, if Archive is applied
   *  as an active tag, it adds a variable 'today' that will be used to show only content that has either `dateTo` in the past (exhibition that has ended)
   *  or `dateFrom` in the past AND dateTo null, which means it was only a one day event. All other tags still apply while archive is active.
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
    <>
      <Seo seo={seo} />
      <HighlightsSection
        highlights={exhibitionsPage?.data?.attributes?.highlights
          ?.map((highlight) => highlight?.contentPage?.data)
          .filter(hasAttributes)}
      />

      <Submenu
        items={[t('common.exhibitions'), t('common.additionalProgram'), t('common.permanentExhibitions')]}
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
        <div className="min-h-screen">
          {/* List all selected tags for screen readers */}
          <div className="sr-only">
            {`${t('common.filteredBy')}: `}
            {[...activeTags, ...activePlaces].map(
              (tag, index) => `${tag}${index === [...activeTags, ...activePlaces].length - 1 ? '' : ', '} `
            )}
          </div>
          <CardSection
            sectionItems={filteredPages}
            isLoading={isLoadingInitialData}
            loadmoreButton={
              !isReachingEnd && (
                <div className="flex justify-center py-12">
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
        </>
      )}

      <NewsletterSection />

      {contactInfo && <Footer contactInfo={contactInfo} />}
    </>
  )
}

export default ExhibitionsPage
