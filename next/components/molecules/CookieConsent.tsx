import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Consent, { Cookies } from 'react-cookie-consent'
import * as ReactGA from 'react-ga'
import Modal from 'react-modal'

import ChevronDown from '../../assets/icons/chevron-down.svg'
import CloseButton from '../../assets/icons/close-x.svg'

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
        style={CUSTOM_STYLES}
        ariaHideApp={false}
        className="fixed mx-auto mt-nav min-h-fit w-10/12 md:w-7/12 lg:mt-0"
      >
        <div>
          <div className="mb-[10px] flex w-full items-center justify-between border-b px-5 md:p-5">
            <div>{t('cookieConsent.modalTitle')}</div>
            <div
              className="m-3 cursor-pointer rounded-md border-2 border-gray-900 p-1 md:m-0 md:p-2"
              onClick={closeModal}
            >
              <CloseButton className="dw-[15px]" />
            </div>
          </div>
          <div className="p-5">
            <div className="h-full max-h-[400px] overflow-y-scroll">
              <div>
                <div className="mb-2 font-medium">{t('cookieConsent.modalContentTitle')}</div>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: t('cookieConsent.modalContentBody'),
                  }}
                />
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
            <div className="mt-5 flex flex-col justify-between gap-1 md:flex-row">
              <button className="rounded-sm bg-gray-900 px-3 py-1 text-sm text-white" onClick={saveSettings}>
                {t('cookieConsent.saveSettings')}
              </button>
              <div className="flex flex-col gap-1 md:flex-row">
                <button
                  className="min-w-[140px] rounded-sm bg-gray-900 py-1 text-sm text-white md:mr-1"
                  onClick={declineCookies}
                >
                  {t('cookieConsent.rejectAll')}
                </button>
                <button
                  className="min-w-[140px] rounded-sm bg-gray-900 py-1 text-sm text-white"
                  onClick={acceptAllCookies}
                >
                  {t('cookieConsent.acceptAll')}
                </button>
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
        declineButtonClasses="text-sm"
        flipButtons
        declineButtonStyle={{
          background: 'black',
          minWidth: '120px',
        }}
        buttonClasses="bg-gray-200 text-sm"
        buttonStyle={{
          background: 'black',
          color: 'white',
          minWidth: '120px',
        }}
        containerClasses="bg-white"
        style={{
          zIndex: '1',
          display: !showModal && !isConsentSubmitted ? 'flex' : 'none',
          alignItems: 'center',
          background: 'white',
          color: 'black',
          padding: '10px',
        }}
        expires={365}
        cookieName="city-library-gdpr"
      >
        <div className="text-sm">
          {t('cookieConsent.body')}{' '}
          <span className="cursor-pointer text-red-600 underline" onClick={() => setShowModal(true)}>
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
      disabled={disabled}
      className={cx('w-10 h-5 flex items-center border border-gray-900 rounded-full mx-3 px-0.5', {
        'justify-end bg-red-600': value,
        'bg-gray-400': !value,
        'cursor-not-allowed border-gray-100 bg-gray-300': disabled,
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
        className={cx('w-3.5 h-3.5 bg-white rounded-full shadow-md')}
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
        className="mt-2 flex cursor-pointer items-center justify-between bg-gray-200 px-2 py-3"
      >
        <div className="flex items-center gap-2">
          <span>{isOpen ? <ChevronDown transform="rotate(180deg)" /> : <ChevronDown />}</span>
          {title}
        </div>
        <Switch
          disabled={title === t('cookieConsent.securityEssentialTitle')}
          value={value}
          onValueChange={(val) => onValueChange(val)}
        />
      </div>
      <div
        className={cx('text-base text-gray-universal-70 transform transition-all duration-200 ease-linear', {
          'h-0 hidden': !isOpen,
          'h-full mt-1 pb-8': isOpen,
        })}
      >
        {content}
      </div>
    </>
  )
}

export default CookieConsent
