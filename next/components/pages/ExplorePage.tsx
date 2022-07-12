import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import { ContactEntityFragment, ExplorePageQuery, TagEntityFragment } from '../../graphql'
import { hasAttributes, isDefined, WithAttributes } from '../../utils/isDefined'
import { usePreviewsByTags } from '../../utils/usePreviewsByTags'
import Button from '../atoms/Button'
import Seo from '../atoms/Seo'
import Filters from '../molecules/Filters'
import Footer from '../molecules/Footer'
import CardSection from '../molecules/sections/CardSection'
import HighlightsSection from '../molecules/sections/HighlightsSection'
import NewsletterSection from '../molecules/sections/NewsletterSection'
import Submenu from '../molecules/Submenu'

interface ExplorePageProps {
  explorePage: ExplorePageQuery['explorePage']
  contactInfo?: WithAttributes<ContactEntityFragment> | null
  tagsTypes?: WithAttributes<TagEntityFragment>[]
  tagsProjects?: WithAttributes<TagEntityFragment>[]
  tagsOthers?: WithAttributes<TagEntityFragment>[]
}

const ExplorePage = ({ explorePage, contactInfo, tagsTypes, tagsProjects, tagsOthers }: ExplorePageProps) => {
  const { t, i18n } = useTranslation()
  const { query } = useRouter()

  const [activeTags, setActiveTags] = useState<string[]>([])

  const { setSize, filteredPages, isLoadingInitialData, isLoadingMore, isReachingEnd } = usePreviewsByTags({
    activeTags,
    activePlaces: [],
    locale: i18n.language,
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

  /** 'Archive' is not a real tag that has a relationship with the content page. Instead, if Archive is applied
   *  as an active tag, it adds a variable 'today' that will be used to show only content that has either `dateTo` in the past (exhibition that has ended)
   * or `dateFrom` in the past AND dateTo null, which means it was only a one day event. All other tags still apply while archive is active.
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
      {seo && <Seo seo={seo} />}
      <HighlightsSection
        highlights={explorePage?.data?.attributes?.highlights
          ?.map((highlight) => highlight?.contentPage?.data)
          .filter(hasAttributes)}
      />
      <Submenu
        filters={
          <Filters
            tagGroups={[tagsTypes ?? [], tagsProjects ?? [], [...(tagsOthers ?? []), archiveTagEntity]]}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          />
        }
      />
      <div className="min-h-screen">
        <CardSection
          sectionItems={filteredPages?.filter(isDefined)}
          isLoading={isLoadingInitialData}
          loadmoreButton={
            !isReachingEnd && (
              <div className="flex justify-center py-12">
                <Button onClick={() => setSize((previousSize) => previousSize + 1)} disabled={isLoadingMore}>
                  {t('common.exploreMoreContent')}
                </Button>
              </div>
            )
          }
          showTags
        />
      </div>
      <NewsletterSection />
      {contactInfo && <Footer contactInfo={contactInfo} />}contactInfo
    </>
  )
}

export default ExplorePage
