import cx from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'
import { useCookies } from 'react-cookie'

import { ContentPageEntityFragment } from '../../graphql'
import { LocalStorageEnum } from '../../types/localStorage.d'
import { WithAttributes } from '../../utils/isDefined'
import { getEquivalentRouteInTargetLocale } from '../../utils/localeRoutes'

interface AppLangSwitchersProps {
  contentPage?: WithAttributes<ContentPageEntityFragment>
  desktop?: boolean
}

const AppLangSwitchers = ({ contentPage, desktop }: AppLangSwitchersProps) => {
  const [, setCookies] = useCookies([LocalStorageEnum.LANG])
  const router = useRouter()
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const onLocaleChange = useCallback(
    (locale: string) => {
      const equivalentRouteInTargetLocale = getEquivalentRouteInTargetLocale(router.pathname, locale, contentPage)

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

      setCookies(LocalStorageEnum.LANG, locale, {
        path: '/',
        sameSite: true,
      })
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.replace(
        {
          pathname: equivalentRouteInTargetLocale,
        },
        undefined,
        { locale }
      )
    },
    [router, setCookies, contentPage]
  )

  return (
    <div className={cx('flex', { 'space-x-xMd': !desktop })}>
      <button
        className={cx('cursor-pointer', {
          'font-semibold': currentLanguage === 'sk',
          'text-black': currentLanguage === 'sk' && !desktop,
        })}
        onClick={() => onLocaleChange('sk')}
        type="button"
      >
        SK
      </button>
      {desktop && <p className="px-2">/</p>}
      <button
        className={cx('cursor-pointer', {
          'font-semibold': currentLanguage === 'en',
          'text-black': currentLanguage === 'en' && !desktop,
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
