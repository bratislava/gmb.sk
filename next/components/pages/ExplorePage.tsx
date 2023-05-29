import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import { ExplorePageQuery, TagEntityFragment } from '../../graphql'
import { hasAttributes, isDefined, WithAttributes } from '../../utils/isDefined'
import { usePreviewsByTags } from '../../utils/usePreviewsByTags'
import Button from '../atoms/Button'
import Seo from '../atoms/Seo'
import Filters from '../molecules/Filters'
import CardSection from '../molecules/sections/CardSection'
import HighlightsSection from '../molecules/sections/HighlightsSection'
import NewsletterSection from '../molecules/sections/NewsletterSection'
import Submenu from '../molecules/Submenu'
import PageWrapper from './PageWrapper'

interface ExplorePageProps {
  explorePage: ExplorePageQuery['explorePage']
  tagsTypes?: WithAttributes<TagEntityFragment>[]
  tagsProjects?: WithAttributes<TagEntityFragment>[]
  tagsOthers?: WithAttributes<TagEntityFragment>[]
}

const ExplorePage = ({ explorePage, tagsTypes, tagsProjects, tagsOthers }: ExplorePageProps) => {
  const { t, i18n } = useTranslation()
  const { query } = useRouter()

  const [activeTags, setActiveTags] = useState<string[]>([])
  const initialTags = tagsTypes?.map((tag) => tag.attributes.slug) ?? []

  const { size, setSize, filteredPages, isLoadingInitialData, isLoadingMore, isReachingEnd } = usePreviewsByTags({
    activeTags: activeTags.length > 0 ? activeTags : initialTags,
    activePlaces: [],
    locale: i18n.language,
    kind: 'explore',
  })

  useEffect(() => {
    const { tags } = query
    if (!tags) {
      return
    }
    if (typeof tags === 'string') {
      setActiveTags([tags])
    } else {
      setActiveTags(tags)
    }
  }, [query])

  const seo = explorePage?.data?.attributes?.seo

  return (
    <PageWrapper>
      <Seo seo={seo} />
      <HighlightsSection
        highlights={explorePage?.data?.attributes?.highlights
          ?.map((highlight) => highlight?.contentPage?.data)
          .filter(hasAttributes)}
      />
      <Submenu
        clearFilters={() => {
          setActiveTags([])
        }}
        filters={
          <Filters
            tagGroups={[tagsTypes ?? [], tagsProjects ?? [], tagsOthers ?? []]}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          />
        }
      />
      <div className="relative min-h-screen bg-white">
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
      <NewsletterSection />
    </PageWrapper>
  )
}

export default ExplorePage
