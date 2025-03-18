import cx from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import React, { ReactNode, useState } from 'react'
import Consent from 'react-cookie-consent'
import Modal from 'react-modal'
import { useEffectOnceWhen } from 'rooks'

import ChevronDownIcon from '@/src/assets/icons/chevron-down.svg'
import CloseIcon from '@/src/assets/icons/close-x.svg'
import Button from '@/src/components/atoms/Button'
import Link from '@/src/components/atoms/Link'
import { getGDPRCookies, setGDPRCookies } from '@/src/utils/GDPRCookies'
import { initializeGoogleAnalytics, trackPageView } from '@/src/utils/googleAnalytics'
import { getRouteForLocale } from '@/src/utils/localeRoutes'
import { onEnterOrSpaceKeyDown } from '@/src/utils/onEnterOrSpaceKeyDown'

const CookieConsent = () => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const [isCookiesSettingsOpen, setIsCookiesSettingsOpen] = useState(false)
  const [isConsentSubmitted, setConsent] = useState(false)
  const [openPanel, setPanel] = useState<string>(t('cookieConsent.securityEssentialTitle'))

  const persistedCookies = getGDPRCookies()

  const [securityCookies] = useState(persistedCookies.securityCookies)
  const [performanceCookies, setPerformanceCookies] = useState(persistedCookies.performanceCookies)
  const [advertisingAndTargetingCookies, setAdvertisingAndTargetingCookies] = useState(
    persistedCookies.advertisingAndTargetingCookies
  )

  const closeCookiesSettings = () => {
    setIsCookiesSettingsOpen(false)
  }

  const saveSettings = () => {
    setGDPRCookies({
      securityCookies,
      performanceCookies,
      advertisingAndTargetingCookies,
    })
    closeCookiesSettings()
    setConsent(true)
  }

  const acceptAllCookies = () => {
    setGDPRCookies({
      securityCookies: true,
      performanceCookies: true,
      advertisingAndTargetingCookies: true,
    })
    closeCookiesSettings()
    setConsent(true)
  }

  const declineAllCookies = () => {
    setGDPRCookies({
      securityCookies: true,
      performanceCookies: false,
      advertisingAndTargetingCookies: false,
    })
    closeCookiesSettings()
    setConsent(true)
  }

  useEffectOnceWhen(() => {
    initializeGoogleAnalytics()
    trackPageView(router.asPath)
  }, persistedCookies.performanceCookies)

  return (
    <>
      <Modal
        isOpen={isCookiesSettingsOpen}
        onRequestClose={closeCookiesSettings}
        ariaHideApp={false}
        className="fixed left-1/2 top-[calc(50%+var(--nav-height))] z-50 mx-auto mt-yMd h-fit w-10/12 -translate-x-1/2 translate-y-[calc(-50%-var(--nav-height))] border-0 bg-white p-0 lg:top-1/2 lg:mt-0 lg:w-7/12 lg:-translate-y-1/2"
      >
        <div className="flex h-[calc(100vh-var(--nav-height)-2*var(--padding-y-md))] flex-col items-center overflow-hidden lg:max-h-[calc(100vh-2*var(--nav-height)-2*var(--padding-y-md))] lg:dh-[650]">
          <div className="mb-[10px] flex w-full flex-[0_0_auto] items-center justify-between border-b px-xSm py-ySm">
            <h1 className="text-lg">{t('cookieConsent.modalTitle')}</h1>
            <button
              type="button"
              onClick={closeCookiesSettings}
              aria-label={t('cookieConsent.closeCookies')}
            >
              <CloseIcon className="dw-[25]" />
            </button>
          </div>
          <div className="flex min-h-0 flex-[1_1_auto] flex-col justify-between p-5">
            <div className="shrink overflow-y-scroll">
              <div>
                <div className="mb-2 text-md">{t('cookieConsent.modalContentTitle')}</div>
                <p className="text-sm">
                  {`${t('cookieConsent.modalContentBody')} `}
                  <Link
                    preserveStyle
                    href={getRouteForLocale('/detail/ochrana-osobnych-udajov', i18n.language)}
                    className="text-gmbGray underline underline-offset-2 hover:font-semibold"
                    onClick={closeCookiesSettings}
                  >
                    {t('common.privacyPolicyGenitiv')}
                  </Link>
                  .
                </p>
              </div>
              <Panel
                title={t('cookieConsent.securityEssentialTitle')}
                content={<>{t('cookieConsent.securityEssentialContent')}</>}
                value={securityCookies}
                onValueChange={() => null}
                isOpen={openPanel === t('cookieConsent.securityEssentialTitle')}
                setPanel={setPanel}
              />
              <Panel
                title={t('cookieConsent.performanceTitle')}
                content={<>{t('cookieConsent.performanceContent')}</>}
                value={performanceCookies}
                onValueChange={(val) => setPerformanceCookies(val)}
                isOpen={openPanel === t('cookieConsent.performanceTitle')}
                setPanel={setPanel}
              />
              <Panel
                title={t('cookieConsent.advertisingTargetingTitle')}
                content={<>{t('cookieConsent.advertisingTargetingContent')}</>}
                value={advertisingAndTargetingCookies}
                onValueChange={(val) => setAdvertisingAndTargetingCookies(val)}
                isOpen={openPanel === t('cookieConsent.advertisingTargetingTitle')}
                setPanel={setPanel}
              />
            </div>
            <div className="mt-5 flex flex-col flex-nowrap justify-between gap-1 lg:flex-row">
              <Button size="small" onClick={saveSettings}>
                {t('cookieConsent.saveSettings')}
              </Button>
              <div className="flex flex-col gap-1 lg:flex-row">
                <Button size="small" onClick={declineAllCookies}>
                  {t('cookieConsent.rejectAll')}
                </Button>
                <Button size="small" onClick={acceptAllCookies}>
                  {t('cookieConsent.acceptAll')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Consent
        onAccept={acceptAllCookies}
        onDecline={declineAllCookies}
        buttonText={t('cookieConsent.acceptAll')}
        enableDeclineButton
        declineButtonText={t('cookieConsent.rejectAll')}
        flipButtons
        ButtonComponent={Button}
        customButtonProps={{
          size: 'small',
          tabIndex: 1,
          'aria-label': t('cookieConsent.acceptAll'),
        }}
        customDeclineButtonProps={{
          size: 'small',
          tabIndex: 1,
          'aria-label': t('cookieConsent.rejectAll'),
        }}
        buttonClasses="lg:whitespace-nowrap"
        declineButtonClasses="lg:whitespace-nowrap"
        disableButtonStyles
        buttonWrapperClasses="flex flex-col gap-y-ySm"
        containerClasses={cx(
          'z-1 fixed bottom-0 left-0 flex-nowrap items-center justify-between gap-x-xMd bg-white px-xMd py-ySm text-black',
          {
            flex: !isCookiesSettingsOpen && !isConsentSubmitted,
            hidden: isCookiesSettingsOpen || isConsentSubmitted,
          }
        )}
        disableStyles
        expires={365}
        cookieName="city-gallery-gdpr"
      >
        <div className="text-sm">
          {t('cookieConsent.body')}{' '}
          <button
            type="button"
            // eslint-disable-next-line jsx-a11y/tabindex-no-positive
            tabIndex={2}
            className="cursor-pointer text-gmbGray underline underline-offset-2 hover:font-semibold"
            onClick={() => setIsCookiesSettingsOpen(true)}
          >
            {t('cookieConsent.setting')}
          </button>
        </div>
      </Consent>
    </>
  )
}

interface SwitchProps {
  title: string
  value: boolean
  onValueChange: (value: boolean) => void
  disabled?: boolean
}

const Switch = ({ title, value, onValueChange, disabled }: SwitchProps) => {
  const onInteraction = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation()
    onValueChange(!value)
  }

  return (
    <div
      id={`switch-${title}`}
      role="checkbox"
      aria-checked={value}
      aria-disabled={disabled}
      tabIndex={0}
      className={cx(
        'mx-3 flex shrink-0 grow-0 items-center rounded-full border-2 border-gmbDark px-0.5 dh-[30] dw-[60]',
        {
          'justify-end bg-gmbDark': value,
          'bg-gmbGray': !value,
          'cursor-not-allowed !bg-gmbGray': disabled,
        }
      )}
      onClick={onInteraction}
      onKeyDown={onEnterOrSpaceKeyDown(onInteraction)}
    >
      <div
        role="presentation"
        onClick={(e) => {
          if (disabled) e.stopPropagation()
        }}
        className={cx('rounded-full bg-white shadow-md dh-[21] dw-[21]')}
      />
    </div>
  )
}

interface PanelProps {
  title: string
  content: ReactNode
  value: boolean
  onValueChange: (value: boolean) => void
  isOpen: boolean
  setPanel: (value: string) => void
}

const Panel = ({ title, content, value, onValueChange, isOpen, setPanel }: PanelProps) => {
  const { t } = useTranslation()
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setPanel(isOpen ? '' : title)}
        onKeyDown={onEnterOrSpaceKeyDown(() => setPanel(isOpen ? '' : title))}
        className="mt-ySm flex cursor-pointer items-center justify-between bg-gmbLightGray px-xSm py-ySm"
      >
        <div className="flex items-center gap-xSm text-md text-black">
          <span>
            {isOpen ? (
              <ChevronDownIcon className="rotate-180 dw-[15]" />
            ) : (
              <ChevronDownIcon className="dw-[15]" />
            )}
          </span>
          <label htmlFor={`switch-${title}`}>{title}</label>
        </div>
        <Switch
          disabled={title === t('cookieConsent.securityEssentialTitle')}
          value={value}
          onValueChange={(val) => onValueChange(val)}
          title={title}
        />
      </div>
      <div
        className={cx(
          'text-gray-universal-70 transform text-md transition-all duration-200 ease-linear',
          {
            'hidden h-0': !isOpen,
            'mt-1 pb-yMd': isOpen,
          }
        )}
      >
        {content}
      </div>
    </>
  )
}

export default CookieConsent
