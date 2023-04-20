import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ArchivePage from '../../components/pages/ArchivePage'
import { ArchivePageQuery, GeneralQuery } from '../../graphql'
import { GeneralContextProvider } from '../../utils/generalContext'
import { client } from '../../utils/gql'

interface ArchivePageProps {
  generalQuery: GeneralQuery
  archivePage: ArchivePageQuery['archivePage']
}

const Archive = ({ generalQuery, archivePage }: ArchivePageProps) => {
  return (
    <GeneralContextProvider general={generalQuery}>
      <ArchivePage archivePage={archivePage} />
    </GeneralContextProvider>
  )
}

export const getStaticProps: GetStaticProps<ArchivePageProps> = async ({ locale = 'sk' }) => {
  const [generalQuery, { archivePage }, translations] = await Promise.all([
    client.General({ locale }),
    client.ArchivePage({ locale }),
    serverSideTranslations(locale, ['common']),
  ])

  return {
    props: {
      generalQuery,
      archivePage,
      ...translations,
    },
    revalidate: 10,
  }
}

export default Archive
