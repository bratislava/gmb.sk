import {
  AboutUsPageQuery,
  NewsQuery,
} from '@bratislava/strapi-sdk-city-gallery';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Page from '../components/pages/Page';
import { client } from '../utils/gql';
import { isDefined } from '../utils/isDefined';
import { ssrTranslations } from '../utils/translations';

interface AboutProps {
  aboutPage: AboutUsPageQuery['aboutPage'];
  contact: AboutUsPageQuery['contact'];
  news: NewsQuery['news'];
}

const About = ({ aboutPage, contact, news }: AboutProps) => {
  const { t } = useTranslation();

  if (!aboutPage) {
    return null;
  }

  return (
    <Page
      page={aboutPage}
      title={t('navigation.aboutGallery')}
      contactInfo={contact}
      newsItems={news?.filter(isDefined)}
    />
  );
};

export const getServerSideProps: GetServerSideProps<AboutProps> = async ({
  locale = 'sk',
}) => {
  const [{ aboutPage, contact }, { news }, translations] = await Promise.all([
    client.AboutUsPage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    ssrTranslations({ locale }, ['common']),
  ]);

  return {
    props: {
      aboutPage,
      contact,
      news,
      ...translations,
    },
  };
};

export default About;
