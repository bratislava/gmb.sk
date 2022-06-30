import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Footer from '../components/molecules/Footer'
import DownloadSection from '../components/molecules/sections/DownloadSection'
import { DisclosureOfInformationPageQuery } from '../graphql'
import { client } from '../utils/gql'
import { isDefined, withAttributes } from '../utils/isDefined'

interface DisclosureOfInformationProps {
  contact: DisclosureOfInformationPageQuery['contact']
}

export const DisclosureOfInformation = ({ contact }: DisclosureOfInformationProps) => {
  const { t } = useTranslation()

  const title = t('footer.disclosureOfInformation')
  const contactInfo = withAttributes(contact?.data)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="m-6 text-xxl lg:m-9 3xl:m-12">{title}</h1>
      <div className="m-6 lg:m-9 3xl:m-12">
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

export const getStaticProps: GetStaticProps = async ({ locale = 'sk' }) => {
  const [{ contact }, translations] = await Promise.all([
    client.DisclosureOfInformationPage({ locale }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      contact,
      ...translations,
    },
    revalidate: 10,
  }
}
export default DisclosureOfInformation
