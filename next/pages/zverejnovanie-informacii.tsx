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
  general: DisclosureOfInformationPageQuery['general']
}

export const DisclosureOfInformation = ({ general }: DisclosureOfInformationProps) => {
  const { t } = useTranslation()

  const title = t('footer.disclosureOfInformation')
  const contactInfo = withAttributes(general?.data)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="px-xMd pt-yLg text-xxl">{title}</h1>
      <div className="py-yLg px-xMd">
        <iframe
          title={t('footer.disclosureOfInformation')}
          src="https://zmluvy.egov.sk/egov/contracts/place:259/iframe/showZmluvy/showFaktury/showObjednavky/orderBy:datum/direction:desc"
          width="100%"
          height="1060px"
        />
      </div>
      <DownloadSection
        files={general?.data?.attributes?.disclosureMoreFiles?.files?.filter(isDefined)}
        title={general?.data?.attributes?.disclosureMoreFiles?.title}
      />
      {contactInfo && <Footer contactInfo={contactInfo} />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'sk' }) => {
  const [{ general }, translations] = await Promise.all([
    client.DisclosureOfInformationPage({ locale }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      general,
      ...translations,
    },
    revalidate: 10,
  }
}
export default DisclosureOfInformation
