import DownloadItem from '@/components/atoms/DownloadItem'
import Section from '@/components/molecules/sections/Section'
import { DownloadItemFragment } from '@/graphql'
import { isDefined } from '@/utils/isDefined'

interface DownloadSectionProps {
  title?: string | null
  files?: DownloadItemFragment[]
  anchor?: string
}

const DownloadSection = ({ files, title, anchor }: DownloadSectionProps) => {
  if (files?.length === 0) {
    return null
  }

  return (
    <Section anchor={anchor} color="dark" className="px-xMd py-yLg">
      {title && <h2 className="pb-yXl text-xxl">{title}</h2>}
      <div className="grid grid-flow-row grid-cols-2 gap-x-xMd gap-y-yMd md:grid-cols-3 lg:grid-cols-5">
        {files?.filter(isDefined).map((item) => (
          <DownloadItem downloadItem={item} key={item.id} />
        ))}
      </div>
    </Section>
  )
}

export default DownloadSection
