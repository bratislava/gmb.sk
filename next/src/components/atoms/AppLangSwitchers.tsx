import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import React, { useCallback } from 'react'

import { PageWrapperProps } from '@/src/components/pages/PageWrapper'
import cn from '@/src/utils/cn'
import { getEquivalentRouteInTargetLocale } from '@/src/utils/localeRoutes'

type AppLangSwitchersProps = { showBothLanguages?: boolean } & Pick<PageWrapperProps, 'page'>

const AppLangSwitchers = ({ page, showBothLanguages }: AppLangSwitchersProps) => {
  const { t, i18n } = useTranslation()

  const router = useRouter()
  const currentLanguage = i18n.language

  const { asPath } = router
  // `asPath` provides the actual path with resolved values, which is essential for dynamic routes
  // For non-dynamic routes, using either `asPath` or `pathname` typically won't make a difference

  const onLocaleChange = useCallback(
    (locale: string) => {
      const cleanPath = asPath.split('?')[0].split('#')[0] // Remove query parameters and hash fragments

      const equivalentRouteInTargetLocale = getEquivalentRouteInTargetLocale(
        cleanPath,
        locale,
        page
      )

      if (!equivalentRouteInTargetLocale) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push({ pathname: `/404` }, undefined, { locale })

        return
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.replace({ pathname: equivalentRouteInTargetLocale }, undefined, { locale })
    },
    [asPath, page, router]
  )

  return (
    <div className={cn('flex', { 'text-nav': !showBothLanguages })}>
      <button
        className={cn('cursor-pointer', {
          'font-semibold': currentLanguage === 'sk',
          hidden: currentLanguage === 'sk' && !showBothLanguages,
        })}
        onClick={() => onLocaleChange('sk')}
        aria-label={t('localization.aria.slovak')}
        type="button"
      >
        SK
      </button>
      {showBothLanguages ? (
        <div aria-hidden className="px-2">
          /
        </div>
      ) : null}
      <button
        className={cn('cursor-pointer', {
          'font-semibold': currentLanguage === 'en',
          hidden: currentLanguage === 'en' && !showBothLanguages,
        })}
        onClick={() => onLocaleChange('en')}
        aria-label={t('localization.aria.english')}
        type="button"
      >
        EN
      </button>
    </div>
  )
}

export default AppLangSwitchers
