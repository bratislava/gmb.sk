import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DownloadSection from '@/src/components/molecules/sections/DownloadSection'
import PageWrapper from '@/src/components/pages/PageWrapper'
import { DisclosureOfInformationPageQuery, GeneralQuery } from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { GeneralContextProvider } from '@/src/utils/generalContext'
import { isDefined } from '@/src/utils/isDefined'

interface DisclosureOfInformationProps {
  generalQuery: GeneralQuery
  generalMoreFile: DisclosureOfInformationPageQuery['general']
}

export const DisclosureOfInformation = ({
  generalQuery,
  generalMoreFile,
}: DisclosureOfInformationProps) => {
  const { t } = useTranslation()

  const title = t('footer.disclosureOfInformation')

  return (
    <GeneralContextProvider general={generalQuery}>
      <PageWrapper>
        <Head>
          <title>{title}</title>
        </Head>
        <h1 className="px-xMd pt-yLg text-xxl">{title}</h1>
        <div className="px-xMd py-yLg">
          <iframe
            title={t('footer.disclosureOfInformation')}
            src="https://zmluvy.egov.sk/egov/contracts/place:259/iframe/showZmluvy/showFaktury/showObjednavky/orderBy:datum/direction:desc"
            width="100%"
            height="1060px"
          />
        </div>
        <DownloadSection
          files={generalMoreFile?.data?.attributes?.disclosureMoreFiles?.files?.filter(isDefined)}
          title={generalMoreFile?.data?.attributes?.disclosureMoreFiles?.title}
        />
      </PageWrapper>
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'sk' }) => {
  const [generalQuery, { general: generalMoreFile }, translations] = await Promise.all([
    client.General({ locale }),
    client.DisclosureOfInformationPage({ locale }),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      generalQuery,
      generalMoreFile,
      ...translations,
    },
    revalidate: 10,
  }
}
export default DisclosureOfInformation
