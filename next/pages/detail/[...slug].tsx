// @ts-strict-ignore
import {
  ContactAndFooterFragment,
  ContentPageFragment,
} from '@bratislava/strapi-sdk-city-gallery';
import { GetServerSideProps } from 'next';
import React from 'react';
import DetailPage from '../../components/pages/DetailPage';
import { client } from '../../utils/gql';
import { ssrTranslations } from '../../utils/translations';

interface DetailProps {
  contentPage: NonNullable<ContentPageFragment>;
  contact: ContactAndFooterFragment;
}

const Detail = ({ contentPage, contact }: DetailProps) => {
  return <DetailPage contentPage={contentPage} contactInfo={contact} />;
};

export const getServerSideProps: GetServerSideProps<DetailProps> = async ({
  query,
  locale,
}) => {
  const slug =
    typeof query.slug === 'string' ? query.slug : query.slug?.join('/');

  const [{ contentPageBySlug: contentPage, contact }, translations] =
    await Promise.all([
      client.ContentPageBySlug({ slug, locale }),
      ssrTranslations({ locale }, ['common']),
    ]);

  if (!contentPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contentPage,
      contact,
      ...translations,
    },
  };
};

export default Detail;
