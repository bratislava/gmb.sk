import {
  ContactAndFooterFragment,
  ExplorePageQuery,
  TagFragment,
} from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { isDefined } from '../../utils/isDefined';
import { usePreviewsByTags } from '../../utils/usePreviewsByTags';
import Button from '../atoms/Button';
import Filters from '../molecules/Filters';
import Footer from '../molecules/Footer';
import Highlight from '../molecules/Highlight';
import CardSection from '../molecules/sections/CardSection';
import NewsletterSection from '../molecules/sections/NewsletterSection';
import Submenu from '../molecules/Submenu';

interface ExplorePageProps {
  explorePage: ExplorePageQuery['explorePage'];
  contactInfo?: ContactAndFooterFragment | null;
  tagsTypes?: TagFragment[];
  tagsProjects?: TagFragment[];
  tagsOthers?: TagFragment[];
}

const ExplorePage = ({
  explorePage,
  contactInfo,
  tagsTypes,
  tagsProjects,
  tagsOthers,
}: ExplorePageProps) => {
  const { t, i18n } = useTranslation();
  const { query } = useRouter();

  const [activeTags, setActiveTags] = useState<string[]>([]);

  const {
    size,
    setSize,
    filteredPages,
    isLoadingInitialData,
    isLoadingMore,
    isReachingEnd,
  } = usePreviewsByTags({
    activeTags,
    activePlaces: [],
    locale: i18n.language,
  });

  useEffect(() => {
    const { tags } = query;
    if (!tags) {
      return;
    }
    if (typeof tags === 'string') {
      setActiveTags([tags]);
    } else {
      setActiveTags(tags);
    }
  }, [query]);

  return (
    <>
      {explorePage?.highlights?.contentPages?.filter(isDefined).map((item) => (
        <Highlight key={item.id} highlight={item} />
      ))}
      <Submenu
        filters={
          <Filters
            tagGroups={[tagsTypes ?? [], tagsProjects ?? [], tagsOthers ?? []]}
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
                <Button
                  onClick={() => setSize(size + 1)}
                  disabled={isLoadingMore}
                >
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
  );
};

export default ExplorePage;
