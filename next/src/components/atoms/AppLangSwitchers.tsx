import cx from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import React, { useCallback } from 'react'

import { ContentPageEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'
import { getEquivalentRouteInTargetLocale } from '@/src/utils/localeRoutes'

interface AppLangSwitchersProps {
  contentPage?: WithAttributes<ContentPageEntityFragment>
  showBothLanguages?: boolean
}

const AppLangSwitchers = ({ contentPage, showBothLanguages }: AppLangSwitchersProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  const { pathname, locale: currentLocale, locales } = router // Use router to access locale for better Next integration

  const onLocaleChange = useCallback(
    (locale: string) => {
      const equivalentRouteInTargetLocale = getEquivalentRouteInTargetLocale(
        pathname,
        locale,
        contentPage
      )

      if (!equivalentRouteInTargetLocale) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push({ pathname: `/404` }, undefined, { locale })

        return
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.replace({ pathname: equivalentRouteInTargetLocale }, undefined, { locale })
    },
    [pathname, contentPage, router]
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
                aria-label={
                  locale === 'sk' ? t('localization.aria.slovak') : t('localization.aria.english')
                }
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
