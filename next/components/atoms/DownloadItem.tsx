import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import FileIcon from '../../assets/icons/file.svg'
import { DownloadItemFragment } from '../../graphql'
import Button from './Button'

interface DownloadProps {
  downloadItem: DownloadItemFragment
}

export const DownloadItem = ({ downloadItem }: DownloadProps) => {
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const file = downloadItem?.file.data?.attributes

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
        a.download = name && typeof name === 'string' && name.length > 0 ? name : 'download'
        document.body.append(a)
        a.click()
      })
      .catch(() => setError(true))
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <h4 className="pb-yMd text-lg">{downloadItem.title ?? file?.name ?? ''}</h4>
      <div>
        <div className="relative left-[calc(-10px*var(--icon-size-factor))] h-fit w-fit">
          <FileIcon fill="#fff" className="relative w-[calc(96px*var(--icon-size-factor))]" />
          <span className="absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 text-md uppercase">
            {file?.ext?.slice(1, 5)}
          </span>
        </div>
        <Button
          disabled={fetching}
          size="link"
          color="light"
          onClick={() => download(file?.url, file?.name)}
          aria-label="download file"
          className="pt-yMd"
        >
          {t('common.download')}
        </Button>
      </div>
    </div>
  )
}

export default DownloadItem
