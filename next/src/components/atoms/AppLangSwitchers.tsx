import cx from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'

import { ContentPageEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'
import { getEquivalentRouteInTargetLocale } from '@/src/utils/localeRoutes'

interface AppLangSwitchersProps {
  contentPage?: WithAttributes<ContentPageEntityFragment>
  showBothLanguages?: boolean
}

const AppLangSwitchers = ({ contentPage, showBothLanguages }: AppLangSwitchersProps) => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const onLocaleChange = useCallback(
    (locale: string) => {
      const equivalentRouteInTargetLocale = getEquivalentRouteInTargetLocale(
        router.pathname,
        locale,
        contentPage
      )

      if (!equivalentRouteInTargetLocale) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push(
          {
            pathname: `/404`,
          },
          undefined,
          { locale }
        )
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.replace(
        {
          pathname: equivalentRouteInTargetLocale,
        },
        undefined,
        { locale }
      )
    },
    [router, contentPage]
  )

  return (
    <div className={cx('flex', { 'text-nav': !showBothLanguages })}>
      <button
        className={cx('cursor-pointer', {
          'font-semibold': currentLanguage === 'sk',
          hidden: currentLanguage === 'sk' && !showBothLanguages,
        })}
        onClick={() => onLocaleChange('sk')}
        type="button"
      >
        SK
      </button>
      {showBothLanguages && <div className="px-2">/</div>}
      <button
        className={cx('cursor-pointer', {
          'font-semibold': currentLanguage === 'en',
          hidden: currentLanguage === 'en' && !showBothLanguages,
        })}
        onClick={() => onLocaleChange('en')}
        type="button"
      >
        EN
      </button>
    </div>
  )
}

export default AppLangSwitchers
