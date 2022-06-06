import {
  ContentPageFragment,
  ExpositionsByPlaceQuery,
  TicketPageBySlugQuery,
} from '@bratislava/strapi-sdk-city-gallery';
import { GetServerSideProps } from 'next';
import React from 'react';
import TicketPage from '../../components/pages/TicketPage';
import { client } from '../../utils/gql';
import { isDefined } from '../../utils/isDefined';
import { getRouteForLocale } from '../../utils/localeRoutes';
import { ssrTranslations } from '../../utils/translations';

interface TicketProps {
  contentPage: NonNullable<ContentPageFragment>;
  contact: TicketPageBySlugQuery['contact'];
  currentEvents?: ExpositionsByPlaceQuery['currentEvents'];
}

const Tickets = ({ contentPage, contact, currentEvents }: TicketProps) => {
  if (!contentPage) {
    return null;
  }

  return (
    <TicketPage
      contentPage={contentPage}
      contactInfo={contact}
      currentEvents={currentEvents?.filter(isDefined)}
    />
  );
};

export const getServerSideProps: GetServerSideProps<TicketProps> = async ({
  query,
  locale = 'sk',
}) => {
  const slug =
    (typeof query.slug === 'string' ? query.slug : query.slug?.join('/')) ?? '';

  const today = new Date().toISOString();

  const [{ contentPageBySlug: contentPage, contact }, translations] =
    await Promise.all([
      client.TicketPageBySlug({
        slug: slug,
        locale: locale,
      }),
      ssrTranslations({ locale }, ['common']),
    ]);

  if (!contentPage) {
    return {
      notFound: true,
    };
  }

  if (!contentPage?.place?.slug) {
    return {
      props: {
        contentPage,
        contact,
        ...translations,
      },
    };
  }

  const { currentEvents } = await client.ExpositionsByPlace({
    locale: locale,
    slug: slug,
    today,
    tagExhibitions: getRouteForLocale('vystavy', locale),
    tagExpositions: getRouteForLocale('stale-expozicie', locale),
    placeSlug: contentPage.place.slug,
  });

  return {
    props: {
      contentPage,
      contact,
      currentEvents,
      ...translations,
    },
  };
};

export default Tickets;
