import {
  ContactAndFooterFragment,
  ExhibitionsPageQuery,
  PlaceTagFragment,
  SectionItemFragment,
  TagFragment,
} from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getAnchor } from '../../utils/getAnchor';
import { isDefined } from '../../utils/isDefined';
import { usePreviewsByTags } from '../../utils/usePreviewsByTags';
import Button from '../atoms/Button';
import Filters from '../molecules/Filters';
import Footer from '../molecules/Footer';
import Highlight from '../molecules/Highlight';
import CardSection from '../molecules/sections/CardSection';
import ChessboardSection from '../molecules/sections/ChessboardSection';
import NewsletterSection from '../molecules/sections/NewsletterSection';
import Submenu from '../molecules/Submenu';

interface ExhibitionsPageProps {
  exhibitionsPage: ExhibitionsPageQuery['exhibitionsPage'];
  exhibitions?: SectionItemFragment[];
  permanentExhibitions?: SectionItemFragment[];
  additionalProgram?: SectionItemFragment[];
  contactInfo?: ContactAndFooterFragment | null;
  tagsProgram?: TagFragment[];
  tagsTargetGroups?: TagFragment[];
  tagsLanguages?: TagFragment[];
  tagsProjects?: TagFragment[];
  tagsOthers?: TagFragment[];
  places?: PlaceTagFragment[];
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
  const { t, i18n } = useTranslation();
  const { query } = useRouter();

  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [activePlaces, setActivePlaces] = useState<string[]>([]);

  const {
    size,
    setSize,
    filteredPages,
    isLoadingInitialData,
    isReachingEnd,
    isLoadingMore,
  } = usePreviewsByTags({
    activeTags,
    activePlaces,
    locale: i18n.language,
  });

  useEffect(() => {
    const { tags } = query;
    if (!tags) {
      return;
    }
    setActivePlaces([]);
    if (typeof tags === 'string') {
      setActiveTags([tags]);
    } else {
      setActiveTags(tags);
    }
  }, [query]);

  return (
    <>
      {exhibitionsPage?.highlights?.contentPages
        ?.filter(isDefined)
        .map((item) => (
          <Highlight key={item.id} highlight={item} />
        ))}

      <Submenu
        items={[
          t('common.exhibitions'),
          t('common.permanentExhibitions'),
          t('common.additionalProgram'),
        ]}
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
  );
};

export default ExhibitionsPage;
