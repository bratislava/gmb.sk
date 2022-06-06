import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from '../components/pages/ErrorPage';
import { ErrorPageQuery } from '../graphql';
import { client } from '../utils/gql';
import { withAttributes } from '../utils/isDefined';
import { ssrTranslations } from '../utils/translations';

interface ErrorProps {
  contact: ErrorPageQuery['contact'];
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ contact, statusCode }: ErrorProps) => {
  if (!contact) {
    return null;
  }

  return (
    <ErrorPage
      contactInfo={withAttributes(contact.data)}
      statusCode={statusCode}
    />
  );
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
