import cx from 'classnames'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import { PageWrapperProps } from '@/src/components/pages/PageWrapper'
import { getEquivalentRouteInTargetLocale } from '@/src/utils/localeRoutes'

type AppLangSwitchersProps = { showBothLanguages?: boolean } & Pick<PageWrapperProps, 'page'>

const AppLangSwitchers = ({ page, showBothLanguages }: AppLangSwitchersProps) => {
  const router = useRouter()

  const { asPath, locale: currentLocale, locales } = router // Use router to access locale for better Next integration
  // `asPath` provides the actual path with resolved values, which is essential for dynamic routes
  // For non-dynamic routes, using either `asPath` or `pathname` typically won't make a difference

  const onLocaleChange = useCallback(
    (locale: string) => {
      const cleanPath = asPath.split('?')[0].split('#')[0] // Remove query parameters and hash fragments

      const localizedPath = getEquivalentRouteInTargetLocale(cleanPath, locale, page)

      if (!localizedPath) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push({ pathname: `/404` }, undefined, { locale })

        return
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.replace({ pathname: localizedPath }, undefined, { locale })
    },
    [asPath, page, router]
  )

  return (
    <div className={cx('flex', showBothLanguages ? 'items-center space-x-2' : 'text-nav')}>
      {locales?.map((locale, index) => {
        const shouldShowLocale = showBothLanguages || locale !== currentLocale
        const showSlash = showBothLanguages && index === 0

        return (
          <React.Fragment key={locale}>
            {shouldShowLocale ? (
              <button
                type="button"
                onClick={() => onLocaleChange(locale)}
                className={cx('cursor-pointer uppercase', {
                  'font-semibold': currentLocale === locale,
                })}
              >
                {locale}
              </button>
            ) : null}

            {showSlash ? <span aria-hidden>/</span> : null}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default AppLangSwitchers
