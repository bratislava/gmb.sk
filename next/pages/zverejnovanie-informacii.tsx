import { useTranslation } from 'next-i18next';
import React from 'react';
import Head from 'next/head';
import { ssrTranslations } from '../utils/translations';
import { GetServerSideProps } from 'next';

export function DisclosureOfInformation() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('footer.disclosureOfInformation')}</title>
      </Head>
      <h1 className="text-xxl m-6 lg:m-9 3xl:m-12">
        {t('footer.disclosureOfInformation')}
      </h1>
      <div className="m-6 lg:m-9 3xl:m-12">
        <iframe
          src="https://zmluvy.egov.sk/egov/contracts/place:259/iframe/showZmluvy/showFaktury/showObjednavky/orderBy:datum/direction:desc"
          width="100%"
          height="1060px"
        ></iframe>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'sk',
}) => {
  const translations = await ssrTranslations({ locale }, ['common']);

  return {
    props: {
      ...translations,
    },
  };
};
export default DisclosureOfInformation;
