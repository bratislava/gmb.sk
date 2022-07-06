import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Consent, { Cookies } from 'react-cookie-consent'
import * as ReactGA from 'react-ga'
import Modal from 'react-modal'

import ChevronDown from '../../assets/icons/chevron-down.svg'
import CloseButton from '../../assets/icons/close-x.svg'
import Button from '../atoms/Button'
import Link from '../atoms/Link'

const CUSTOM_STYLES = {
  content: {
    zIndex: '100',
    background: 'white',
    border: 'none',
    borderRadius: '0',
    padding: '0',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}

const CookieConsent = () => {
  const { t } = useTranslation()
  const [showModal, setShowModal] = React.useState(false)
  const [isConsentSubmitted, setConsent] = React.useState(false)
  const [securityCookies] = React.useState<boolean>(true)
  const [performanceCookies, setPerformanceCookies] = React.useState<boolean>(true)
  const [advertisingCookies, setAdvertisingCookies] = React.useState<boolean>(true)
  const [openPanel, setPanel] = React.useState<string>(t('cookieConsent.securityEssentialTitle'))
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID ?? '')
  const closeModal = () => {
    setShowModal(false)
  }

  const saveSettings = () => {
    Cookies.set('city-library-gdpr', {
      security_cookies: securityCookies,
      performance_cookies: performanceCookies,
      advertising_and_targeting_cookies: advertisingCookies,
    })
    ReactGA.set({
      security_cookies: securityCookies,
      performance_cookies: performanceCookies,
      advertising_and_targeting_cookies: advertisingCookies,
    })
    setShowModal(false)
    setConsent(true)
  }
  const acceptAllCookies = () => {
    Cookies.set('city-library-gdpr', {
      security_cookies: true,
      performance_cookies: true,
      advertising_and_targeting_cookies: true,
    })
    ReactGA.set({
      security_cookies: true,
      performance_cookies: true,
      advertising_and_targeting_cookies: true,
    })
    setShowModal(false)
    setConsent(true)
  }
  const declineCookies = () => {
    setPerformanceCookies(false)
    setAdvertisingCookies(false)
    Cookies.set('city-library-gdpr', {
      security_cookies: true,
      performance_cookies: false,
      advertising_and_targeting_cookies: false,
    })
    ReactGA.set({
      security_cookies: true,
      performance_cookies: false,
      advertising_and_targeting_cookies: false,
    })
    setTimeout(() => {
      setShowModal(false)
      setConsent(true)
    }, 300)
  }
  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="fixed top-[calc(50%+var(--height-nav))] left-1/2 z-50 mx-auto mt-yMd h-fit w-10/12 translate-y-[calc(-50%-var(--height-nav))] -translate-x-1/2 border-0 border-r-0 bg-white p-0 lg:top-1/2 lg:mt-0 lg:w-7/12 lg:-translate-y-1/2"
      >
        <div className="flex h-[calc(100vh-var(--height-nav)-2*var(--padding-y-md))] flex-col items-center overflow-hidden lg:h-[500px]">
          <div className="mb-[10px] flex w-full flex-[0_0_auto] items-center justify-between border-b py-ySm px-xSm">
            <h1 className="text-lg">{t('cookieConsent.modalTitle')}</h1>
            <button type="button" onClick={closeModal}>
              <CloseButton className="dw-[25px]" />
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
                    href="/"
                    className="text-gmbGray underline underline-offset-2 hover:font-semibold"
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
                value={advertisingCookies}
                onValueChange={(val) => setAdvertisingCookies(val)}
                isOpen={openPanel === t('cookieConsent.advertisingTargetingTitle')}
                setPanel={setPanel}
              />
            </div>
            <div className="mt-5 flex flex-col flex-nowrap justify-between gap-1 lg:flex-row">
              <Button size="small" onClick={saveSettings}>
                {t('cookieConsent.saveSettings')}
              </Button>
              <div className="flex flex-col gap-1 lg:flex-row">
                <Button size="small" onClick={declineCookies}>
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
        onAccept={() => {
          acceptAllCookies()
        }}
        buttonText={t('cookieConsent.acceptAll')}
        enableDeclineButton
        declineButtonText={t('cookieConsent.rejectAll')}
        flipButtons
        ButtonComponent={Button}
        customButtonProps={{ size: 'small' }}
        customDeclineButtonProps={{ size: 'small' }}
        buttonClasses="lg:whitespace-nowrap"
        declineButtonClasses="lg:whitespace-nowrap"
        disableButtonStyles
        buttonWrapperClasses="flex flex-col gap-y-ySm"
        containerClasses={cx(
          'fixed left-0 bottom-0 bg-white z-1 items-center text-black px-xMd py-ySm justify-between flex-nowrap gap-x-xMd',
          {
            flex: !showModal && !isConsentSubmitted,
            hidden: showModal || isConsentSubmitted,
          }
        )}
        disableStyles
        expires={365}
        cookieName="city-library-gdpr"
      >
        <div className="text-sm">
          {t('cookieConsent.body')}{' '}
          <span
            className="cursor-pointer text-gmbGray underline underline-offset-2 hover:font-semibold"
            onClick={() => setShowModal(true)}
          >
            {t('cookieConsent.setting')}
          </span>
        </div>
      </Consent>
    </div>
  )
}

interface SwitchProps {
  value: boolean
  onValueChange: (value: boolean) => void
  disabled?: boolean
}

const Switch = ({ value, onValueChange, disabled }: SwitchProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cx('dw-[40px] dh-[20px] flex items-center border-2 rounded-full border-gmbDark mx-3 px-0.5', {
        'justify-end bg-gmbDark': value,
        'bg-gmbLightGray': !value,
        'cursor-not-allowed !bg-gmbGray': disabled,
      })}
      onClick={(e) => {
        e.stopPropagation()
        onValueChange(!value)
      }}
    >
      <div
        onClick={(e) => {
          if (disabled) e.stopPropagation()
        }}
        className={cx('dw-[14px] dh-[14px] bg-white rounded-full shadow-md')}
      />
    </button>
  )
}
interface PanelProps {
  title: string
  content: React.ReactNode
  value: boolean
  onValueChange: (value: boolean) => void
  isOpen: boolean
  setPanel: (value: string) => void
}

const Panel = ({ title, content, value, onValueChange, isOpen, setPanel }: PanelProps) => {
  const { t } = useTranslation(['common'])
  return (
    <>
      <div
        onClick={() => setPanel(isOpen ? '' : title)}
        className="mt-ySm flex cursor-pointer items-center justify-between bg-gmbLightGray px-xSm py-ySm"
      >
        <div className="flex items-center gap-xSm text-md text-black">
          <span>
            {isOpen ? <ChevronDown className="rotate-180 dw-[15px]" /> : <ChevronDown className="dw-[15px]" />}
          </span>
          {title}
        </div>
        <Switch
          disabled={title === t('cookieConsent.securityEssentialTitle')}
          value={value}
          onValueChange={(val) => onValueChange(val)}
        />
      </div>
      <div
        className={cx('text-md text-gray-universal-70 transform transition-all duration-200 ease-linear', {
          'h-0 hidden': !isOpen,
          'mt-1 pb-yMd': isOpen,
        })}
      >
        {content}
      </div>
    </>
  )
}

export default CookieConsent
