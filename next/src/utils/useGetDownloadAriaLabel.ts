import { useTranslation } from 'next-i18next'

import { DownloadItemFragment } from '@/src/services/graphql'
import { formatFileExtension } from '@/src/utils/formatFileExtension'
import { formatFileSize } from '@/src/utils/formatFileSize'

/**
 * Inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/useGetDownloadAriaLabel.tsx
 */

export const useGetDownloadAriaLabel = () => {
  const { t, i18n } = useTranslation()

  const getDownloadAriaLabel = (downloadItem: DownloadItemFragment): string => {
    if (!downloadItem) return `${t('fileItem.aria.downloadFile')}`

    const file = downloadItem?.file.data?.attributes

    const formattedFileFormat = formatFileExtension(file?.ext) ?? ''
    const formattedFileSize = formatFileSize(file?.size, i18n.language) ?? ''
    // Provide an empty string as the fallback value to prevent Next from displaying
    // `undefined` or `null` in the translated text when variables are missing

    return `${t('fileItem.aria.downloadFileAriaLabel', {
      title: downloadItem.title ?? file?.name ?? '',
      format: formattedFileFormat,
      size: formattedFileSize,
    })}`
  }

  return { getDownloadAriaLabel }
}
