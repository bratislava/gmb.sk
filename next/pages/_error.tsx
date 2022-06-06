import { ErrorPageQuery } from '@bratislava/strapi-sdk-city-gallery';
import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from '../components/pages/ErrorPage';
import { client } from '../utils/gql';
import { ssrTranslations } from '../utils/translations';

interface ErrorProps {
  contact: ErrorPageQuery['contact'];
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ contact, statusCode }: ErrorProps) => {
  if (!contact) {
    return null;
  }

  return <ErrorPage contactInfo={contact} statusCode={statusCode} />;
};

export const getServerSideProps: GetServerSideProps<ErrorProps> = async ({
  locale = 'sk',
  res,
}) => {
  const [{ contact }, translations] = await Promise.all([
    client.VisitUsPage({ locale }),
    ssrTranslations({ locale }, ['common']),
  ]);
  return {
    props: {
      statusCode: res.statusCode,
      contact,
      ...translations,
    },
  };
};

export default Error;
