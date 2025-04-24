import { isDefined } from '@/src/utils/isDefined'

/**
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/src/utils/formatFileExtension.ts
 */

export const formatFileExtension = (ext: string | null | undefined) => {
  if (isDefined(ext)) {
    // @ts-ignore
    return ext.replace(/^\./, '').toUpperCase()
  }

  return ext
}
