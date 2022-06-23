import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { ssrTranslations } from '../utils/translations'

export const DisclosureOfInformation = () => {
  const { t } = useTranslation()

  const title = t('footer.disclosureOfInformation')
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="m-6 text-xxl lg:m-9 3xl:m-12">{title}</h1>
      <div className="m-6 lg:m-9 3xl:m-12">
        <iframe
          title={title}
          src="https://zmluvy.egov.sk/egov/contracts/place:259/iframe/showZmluvy/showFaktury/showObjednavky/orderBy:datum/direction:desc"
          width="100%"
          height="1060px"
        />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = 'sk' }) => {
  const translations = await ssrTranslations({ locale }, ['common'])

  console.log(translations)

  return {
    props: {
      ...translations,
    },
  }
}
export default DisclosureOfInformation
