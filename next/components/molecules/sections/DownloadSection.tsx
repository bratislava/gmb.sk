import { DownloadItemFragment } from '../../../graphql'
import { isDefined } from '../../../utils/isDefined'
import DownloadItem from '../../atoms/DownloadItem'
import Section from './Section'

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
    <Section anchor={anchor} color="dark" className="px-xStandard py-yHigh">
      <h2 className="pb-12 text-xxl lg:pb-44">{title}</h2>
      <div className="grid grid-flow-row grid-cols-1 gap-x-xStandard gap-y-yStandard md:grid-cols-3 lg:grid-cols-5">
        {files?.filter(isDefined).map((item) => (
          <DownloadItem downloadItem={item} key={item.id} />
        ))}
      </div>
    </Section>
  )
}

export default DownloadSection
