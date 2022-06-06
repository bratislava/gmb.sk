import cx from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'
import { useCookies } from 'react-cookie'
import { useTranslation } from 'react-i18next'
import { ContentPageEntityFragment } from '../../graphql'
import { LocalStorageEnum } from '../../types/localStorage.d'
import { WithAttributes } from '../../utils/isDefined'
import { getEquivalentRouteInTargetLocale } from '../../utils/localeRoutes'

interface AppLangSwitchersProps {
  contentPage?: WithAttributes<ContentPageEntityFragment>
}

const AppLangSwitchers = ({ contentPage }: AppLangSwitchersProps) => {
  const [, setCookies] = useCookies([LocalStorageEnum.LANG])
  const router = useRouter()
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const onLocaleChange = React.useCallback(
    (locale: string) => {
      const equivalentRouteInTargetLocale = getEquivalentRouteInTargetLocale(router.pathname, locale, contentPage)

      switch (locale) {
        case 'sk':
          setCookies(LocalStorageEnum.LANG, locale, {
            path: '/',
            sameSite: true,
          })
          router.replace(
            {
              pathname: equivalentRouteInTargetLocale,
            },
            undefined,
            { locale: 'sk' }
          )
          break
        case 'en':
          setCookies(LocalStorageEnum.LANG, locale, {
            path: '/',
            sameSite: true,
          })
          router.replace(
            {
              pathname: equivalentRouteInTargetLocale,
            },
            undefined,
            { locale: 'en' }
          )
          break
        default:
          return
      }
    },
    [router, setCookies, contentPage]
  )

  return (
    <div className="flex">
      <button
        className={cx('cursor-pointer', {
          'font-semibold': currentLanguage === 'sk',
        })}
        onClick={() => onLocaleChange('sk')}
      >
        Slovenčina
      </button>
      <p className="px-2">/</p>
      <button
        className={cx('cursor-pointer', {
          'font-semibold': currentLanguage === 'en',
        })}
        onClick={() => onLocaleChange('en')}
      >
        English
      </button>
    </div>
  )
}

export default AppLangSwitchers
