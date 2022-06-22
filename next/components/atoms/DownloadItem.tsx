import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import FileIcon from '../../assets/icons/file.svg'
import { DownloadItemFragment } from '../../graphql'
import Button from './Button'

interface DownloadProps {
  downloadItem: DownloadItemFragment
}

export const DownloadItem = ({ downloadItem }: DownloadProps) => {
  const [fetching, setFetching] = useState(false)
  const [_error, setError] = useState(false)
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
    <div>
      <h4 className="pb-8 text-lg lg:pb-10 3xl:pb-12">{downloadItem.title ?? file?.name ?? ''}</h4>
      <div className="relative left-[-10px] h-fit w-fit">
        <FileIcon width={100} fill="#fff" className="relative" />
        <span className="absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 uppercase">
          {file?.ext?.slice(1, 5)}
        </span>
      </div>
      <Button
        disabled={fetching}
        size="link"
        color="light"
        onClick={() => download(file?.url, file?.name)}
        aria-label="download file"
        className="pt-8 lg:pt-12"
      >
        {t('common.download')}
      </Button>
    </div>
  )
}

export default DownloadItem
