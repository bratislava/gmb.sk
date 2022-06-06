import {
  GetInvolvedPageQuery,
  HomePageQuery,
  NewsQuery,
} from '@bratislava/strapi-sdk-city-gallery';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Page from '../components/pages/Page';
import { client } from '../utils/gql';
import { isDefined } from '../utils/isDefined';
import { ssrTranslations } from '../utils/translations';

interface GetInvolvedProps {
  getInvolvedPage: GetInvolvedPageQuery['getInvolvedPage'];
  contact: HomePageQuery['contact'];
  news: NewsQuery['news'];
}

const GetInvolved = ({ getInvolvedPage, contact, news }: GetInvolvedProps) => {
  const { t } = useTranslation();

  if (!getInvolvedPage) {
    return null;
  }

  return (
    <Page
      page={getInvolvedPage}
      title={t('navigation.getInvolved')}
      contactInfo={contact}
      newsItems={news?.filter(isDefined)}
    />
  );
};

export const getServerSideProps: GetServerSideProps<GetInvolvedProps> = async ({
  locale = 'sk',
}) => {
  const [{ getInvolvedPage, contact }, { news }, translations] =
    await Promise.all([
      client.GetInvolvedPage({ locale }),
      client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
      ssrTranslations({ locale }, ['common']),
    ]);

  return {
    props: {
      getInvolvedPage,
      contact,
      news,
      ...translations,
    },
  };
};

export default GetInvolved;
