import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import FileIcon from '@/src/assets/icons/file.svg'
import Button from '@/src/components/atoms/Button'
import { DownloadItemFragment } from '@/src/services/graphql'

interface DownloadProps {
  downloadItem: DownloadItemFragment
}

const DownloadItem = ({ downloadItem }: DownloadProps) => {
  const [fetching, setFetching] = useState(false)
  const { t } = useTranslation()

  const file = downloadItem?.file.data?.attributes

  // TODO fix types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const download = (url: RequestInfo | undefined, name: string | any[] | undefined) => {
    if (!url) {
      throw new Error('Resource URL not provided. You need to provide one.')
    }
    setFetching(true)
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        setFetching(false)
        const blobURL = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = blobURL
        a.style.display = 'none'
        // TOTO may need refactor
        // eslint-disable-next-line promise/always-return
        a.download = name && typeof name === 'string' && name.length > 0 ? name : 'download'
        document.body.append(a)
        a.click()
      })
      // TODO proper error handling
      // eslint-disable-next-line no-console
      .catch((error_) => console.log(error_))
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <h4 className="pb-yMd text-lg">{downloadItem.title ?? file?.name ?? ''}</h4>
      <div>
        <Button
          disabled={fetching}
          onClick={() => download(file?.url, file?.name)}
          aria-label={t('common.downloadFile', { file: file?.name })}
          size="link"
          color="light"
          className="flex flex-col gap-yMd"
        >
          <div className="relative left-[calc(-10*var(--size-factor))] size-fit">
            <FileIcon fill="#fff" className="relative dw-[96]" />
            <span className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 text-md uppercase">
              {file?.ext?.slice(1, 5)}
            </span>
          </div>
          {t('common.download')}
        </Button>
      </div>
    </div>
  )
}

export default DownloadItem
