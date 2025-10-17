import { useTranslation } from 'next-i18next'

import FileIcon from '@/src/assets/icons/file.svg'
import Button from '@/src/components/atoms/Button'
import { DownloadItemFragment } from '@/src/services/graphql'
import { formatFileExtension } from '@/src/utils/formatFileExtension'
import { useGetDownloadAriaLabel } from '@/src/utils/useGetDownloadAriaLabel'

interface DownloadProps {
  downloadItem: DownloadItemFragment
}

const DownloadItem = ({ downloadItem }: DownloadProps) => {
  const { t } = useTranslation()
  const { getDownloadAriaLabel } = useGetDownloadAriaLabel()

  const file = downloadItem?.file.data?.attributes

  return file ? (
    <div className="relative flex h-full flex-col justify-between gap-yMd">
      <h4 className="text-lg">{downloadItem.title ?? file.name ?? ''}</h4>

      <div className="flex flex-col items-start gap-yMd">
        <div aria-hidden className="relative left-[calc(-10*var(--size-factor))] size-fit">
          <FileIcon fill="#fff" className="relative dw-[96]" />
          {file.ext ? (
            <span className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 text-md uppercase">
              {formatFileExtension(file.ext)}
            </span>
          ) : null}
        </div>

        <Button
          aria-label={getDownloadAriaLabel(downloadItem)}
          href={file.url}
          size="link"
          color="light"
          stretched
          target="_blank"
        >
          {t('common.download')}
        </Button>
      </div>
    </div>
  ) : null
}

export default DownloadItem
