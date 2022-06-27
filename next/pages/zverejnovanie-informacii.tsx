import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

import Footer from '../components/molecules/Footer'
import DownloadSection from '../components/molecules/sections/DownloadSection'
import { DisclosureOfInformationPageQuery } from '../graphql'
import { client } from '../utils/gql'
import { isDefined, withAttributes } from '../utils/isDefined'
import { ssrTranslations } from '../utils/translations'

interface DisclosureOfInformationProps {
  contact: DisclosureOfInformationPageQuery['contact']
}

export const DisclosureOfInformation = ({ contact }: DisclosureOfInformationProps) => {
  const { t } = useTranslation()

  const contactInfo = withAttributes(contact?.data)

  return (
    <>
      <Head>
        <title>{t('footer.disclosureOfInformation')}</title>
      </Head>
      <h1 className="m-yLg text-xxl 3xl:m-12">{t('footer.disclosureOfInformation')}</h1>
      <div className="m-yLg">
        <iframe
          title={t('footer.disclosureOfInformation')}
          src="https://zmluvy.egov.sk/egov/contracts/place:259/iframe/showZmluvy/showFaktury/showObjednavky/orderBy:datum/direction:desc"
          width="100%"
          height="1060px"
        />
      </div>
      <DownloadSection
        files={contact?.data?.attributes?.disclosureMoreFiles?.files?.filter(isDefined)}
        title={contact?.data?.attributes?.disclosureMoreFiles?.title}
      />
      {contactInfo && <Footer contactInfo={contactInfo} />}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = 'sk' }) => {
  const [{ contact }, translations] = await Promise.all([
    client.DisclosureOfInformationPage({ locale }),
    ssrTranslations({ locale }, ['common']),
  ])
  return {
    props: {
      contact,
      ...translations,
    },
  }
}
export default DisclosureOfInformation
