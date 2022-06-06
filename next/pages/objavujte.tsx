import {
  ExplorePageQuery,
  TagsByCategorySlugQuery,
} from '@bratislava/strapi-sdk-city-gallery';
import { GetServerSideProps } from 'next';
import React from 'react';
import ExplorePage from '../components/pages/ExplorePage';
import { client } from '../utils/gql';
import { isDefined } from '../utils/isDefined';
import { getRouteForLocale } from '../utils/localeRoutes';
import { ssrTranslations } from '../utils/translations';

interface ExploreProps {
  explorePage: ExplorePageQuery['explorePage'];
  contact: ExplorePageQuery['contact'];
  tagsTypes: TagsByCategorySlugQuery['tagCategoryBySlug'];
  tagsProjects: TagsByCategorySlugQuery['tagCategoryBySlug'];
  tagsOthers: TagsByCategorySlugQuery['tagCategoryBySlug'];
}

const Explore = ({
  explorePage,
  contact,
  tagsTypes,
  tagsProjects,
  tagsOthers,
}: ExploreProps) => {
  if (!explorePage) {
    return null;
  }

  return (
    <ExplorePage
      explorePage={explorePage}
      contactInfo={contact}
      tagsTypes={tagsTypes?.tags?.filter(isDefined)}
      tagsProjects={tagsProjects?.tags?.filter(isDefined)}
      tagsOthers={tagsOthers?.tags?.filter(isDefined)}
    />
  );
};

export const getServerSideProps: GetServerSideProps<ExploreProps> = async ({
  locale = 'sk',
}) => {
  const [
    { explorePage, contact },
    { tagCategoryBySlug: tagsTypes },
    { tagCategoryBySlug: tagsProjects },
    { tagCategoryBySlug: tagsOthers },
    translations,
  ] = await Promise.all([
    client.ExplorePage({ locale }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('objavujte-typy', locale),
    }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('objavujte-projekty', locale),
    }),
    client.TagsByCategorySlug({
      locale,
      tag: getRouteForLocale('objavujte-ostatne', locale),
    }),
    ssrTranslations({ locale }, ['common']),
  ]);

  return {
    props: {
      explorePage,
      contact,
      tagsTypes,
      tagsProjects,
      tagsOthers,
      ...translations,
    },
  };
};

export default Explore;
