import { HomePageQuery, NewsQuery } from '@bratislava/strapi-sdk-city-gallery';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import Page from '../components/pages/Page';
import { client } from '../utils/gql';
import { isDefined } from '../utils/isDefined';
import { ssrTranslations } from '../utils/translations';

interface IndexProps {
  homepage: HomePageQuery['homepage'];
  contact: HomePageQuery['contact'];
  news: NewsQuery['news'];
}
export function Index({ homepage, contact, news }: IndexProps) {
  const { t, i18n } = useTranslation();

  return (
    <Page
      page={homepage}
      title={
        i18n.language === 'sk'
          ? `${t('common.cityGallery')} ${t('common.bratislavaGenitiv')}`
          : `${t('common.bratislavaGenitiv')} ${t('common.cityGallery')}`
      }
      contactInfo={contact}
      newsItems={news?.filter(isDefined)}
    />
  );
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async ({
  locale = 'sk',
}) => {
  const [{ homepage, contact }, { news }, translations] = await Promise.all([
    client.HomePage({ locale }),
    client.News({ locale, tag: locale === 'en' ? 'news' : 'aktuality' }),
    ssrTranslations({ locale }, ['common']),
  ]);

  return {
    props: {
      homepage,
      contact,
      news,
      ...translations,
    },
  };
};

export default Index;
