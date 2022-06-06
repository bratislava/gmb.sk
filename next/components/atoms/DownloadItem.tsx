import { DownloadItemFragment } from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { ReactComponent as FileIcon } from '../../assets/icons/file.svg';
import Button from './Button';

interface DownloadProps {
  downloadItem: DownloadItemFragment;
}

export function DownloadItem({ downloadItem }: DownloadProps) {
  const [fetching, setFetching] = useState(false);
  const [_error, setError] = useState(false);
  const { t } = useTranslation();

  const download = (
    url: RequestInfo | undefined,
    name: string | any[] | undefined
  ) => {
    if (!url) {
      throw new Error('Resource URL not provided. You need to provide one.');
    }
    setFetching(true);
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        setFetching(false);
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobURL;
        a.style.display = 'none';
        a.download =
          name && typeof name === 'string' && name.length > 0
            ? name
            : 'download';
        document.body.appendChild(a);
        a.click();
      })
      .catch(() => setError(true));
  };

  return (
    <div>
      <h4 className="pb-8 text-lg lg:pb-10 3xl:pb-12">
        {downloadItem.title ?? downloadItem.file?.name ?? ''}
      </h4>
      <div className="relative w-fit h-fit left-[-10px]">
        <FileIcon width={100} fill="#fff" className="relative" />
        <span className="absolute block uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {downloadItem?.file?.ext?.slice(1, 5)}
        </span>
      </div>
      <Button
        disabled={fetching}
        size="link"
        color="light"
        onClick={() =>
          download(downloadItem?.file?.url, downloadItem?.file?.name)
        }
        aria-label="download file"
        className="pt-8 lg:pt-12"
      >
        {t('common.download')}
      </Button>
    </div>
  );
}

export default DownloadItem;
