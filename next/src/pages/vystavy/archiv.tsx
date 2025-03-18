import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ArchivePage from '@/src/components/pages/ArchivePage'
import { ArchivePageQuery, GeneralQuery } from '@/src/services/graphql'
import { client } from '@/src/services/graphql/gql'
import { GeneralContextProvider } from '@/src/utils/generalContext'

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
    serverSideTranslations(locale),
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
