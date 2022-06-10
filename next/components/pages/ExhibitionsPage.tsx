import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
  ContactEntityFragment,
  ExhibitionsPageQuery,
  PlaceEntityFragment,
  SectionItemEntityFragment,
  TagEntityFragment,
} from '../../graphql'
import { getAnchor } from '../../utils/getAnchor'
import { hasAttributes, isDefined, WithAttributes } from '../../utils/isDefined'
import { usePreviewsByTags } from '../../utils/usePreviewsByTags'
import Button from '../atoms/Button'
import Seo from '../atoms/Seo'
import Filters from '../molecules/Filters'
import Footer from '../molecules/Footer'
import Highlight from '../molecules/Highlight'
import CardSection from '../molecules/sections/CardSection'
import ChessboardSection from '../molecules/sections/ChessboardSection'
import NewsletterSection from '../molecules/sections/NewsletterSection'
import Submenu from '../molecules/Submenu'

interface ExhibitionsPageProps {
  exhibitionsPage: ExhibitionsPageQuery['exhibitionsPage']
  exhibitions?: WithAttributes<SectionItemEntityFragment>[]
  permanentExhibitions?: WithAttributes<SectionItemEntityFragment>[]
  additionalProgram?: WithAttributes<SectionItemEntityFragment>[]
  contactInfo?: WithAttributes<ContactEntityFragment> | null
  tagsProgram?: WithAttributes<TagEntityFragment>[]
  tagsTargetGroups?: WithAttributes<TagEntityFragment>[]
  tagsLanguages?: WithAttributes<TagEntityFragment>[]
  tagsProjects?: WithAttributes<TagEntityFragment>[]
  tagsOthers?: WithAttributes<TagEntityFragment>[]
  places?: WithAttributes<PlaceEntityFragment>[]
}

const PAGES_COUNT_PER_LOAD = 6

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

  const { size, setSize, filteredPages, isLoadingInitialData, isReachingEnd, isLoadingMore } = usePreviewsByTags({
    activeTags,
    activePlaces,
    locale: i18n.language,
  })

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

  return (
    <>
      {seo && <Seo seo={seo} />}
      {exhibitionsPage?.data?.attributes?.highlights?.contentPages?.data?.filter(hasAttributes).map((item) => (
        <Highlight key={item.id} highlight={item} />
      ))}

      <Submenu
        items={[t('common.exhibitions'), t('common.permanentExhibitions'), t('common.additionalProgram')]}
        filters={
          <Filters
            tagGroups={[
              tagsProgram ?? [],
              tagsTargetGroups ?? [],
              tagsLanguages ?? [],
              tagsProjects ?? [],
              tagsOthers ?? [],
            ]}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
            places={places}
            activePlaces={activePlaces}
            setActivePlaces={setActivePlaces}
          />
        }
      />

      {activeTags.length || activePlaces.length ? (
        <div className="min-h-screen">
          <CardSection
            sectionItems={filteredPages?.filter(isDefined)}
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
            showTags
          />
          <ChessboardSection
            title={t('common.permanentExhibitions')}
            sectionItems={permanentExhibitions}
            anchor={getAnchor(t('common.permanentExhibitions'))}
            showTags
          />
          <CardSection
            title={t('common.additionalProgram')}
            sectionItems={additionalProgram}
            anchor={getAnchor(t('common.additionalProgram'))}
            showTags
          />
        </>
      )}

      <NewsletterSection />

      {contactInfo && <Footer contactInfo={contactInfo} />}
    </>
  )
}

export default ExhibitionsPage
