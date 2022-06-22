// TODO remove ts-ignore flags

import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import cfg from '../next.config'

const cachedSsrTranslations = {
  en: {},
  sk: {},
}

// cache more subsets using this if needed
const preCachedNamespaces = [['common']]

export const ssrTranslations = async (
  ctx: { locale?: string } | undefined,
  namespaces?: string[]
): Promise<SSRConfig> => {
  const locale = ctx?.locale ?? 'sk'
  const namespaceString = (namespaces || []).join('-')
  // @ts-ignore
  const cachedValue = cachedSsrTranslations[locale][namespaceString]
  if (cachedValue) {
    console.log(`Loading translations under cache key: ${namespaceString}`)
    return cachedValue
  }
  const { i18n, reloadOnPrerender } = cfg(null, {
    defaultConfig: {},
  })
  const result = await serverSideTranslations(locale, namespaces, {
    i18n,
    reloadOnPrerender,
  })
  // @ts-ignore
  cachedSsrTranslations[locale][namespaceString] = result
  return result
}

// warm-up the cache
;(async () => {
  console.log('Warming up SSR translation cache')
  for (const locale in cachedSsrTranslations) {
    await Promise.all(
      preCachedNamespaces.map((arr) => {
        console.log('Caching translations:', arr)
        return ssrTranslations({ locale }, arr)
      })
    )
  }
})().catch((error) => {
  console.log('Error caching translations - will fall back')
  console.log(error)
})
