import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import Button from '@/src/components/atoms/Button'
import Filters from '@/src/components/molecules/Filters'
import CardSection from '@/src/components/molecules/sections/CardSection'
import Section from '@/src/components/molecules/sections/Section'
import Submenu from '@/src/components/molecules/Submenu'
import { TagEntityFragment } from '@/src/services/graphql'
import { isDefined, WithAttributes } from '@/src/utils/isDefined'
import { usePreviewsByTags } from '@/src/utils/usePreviewsByTags'

interface ExploreSectionProps {
  title?: string
  tagsTypes?: WithAttributes<TagEntityFragment>[]
  tagsProjects?: WithAttributes<TagEntityFragment>[]
  tagsOthers?: WithAttributes<TagEntityFragment>[]
}

const ExploreSection = ({ title, tagsTypes, tagsProjects, tagsOthers }: ExploreSectionProps) => {
  const { t, i18n } = useTranslation()
  const { query } = useRouter()

  const [activeTags, setActiveTags] = useState<string[]>([])
  const initialTags = tagsTypes?.map((tag) => tag.attributes.slug) ?? []

  const { size, setSize, filteredPages, isLoadingInitialData, isLoadingMore, isReachingEnd } =
    usePreviewsByTags({
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

  return (
    <Section title={title}>
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
    </Section>
  )
}

export default ExploreSection
