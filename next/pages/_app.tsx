import '../styles/globals.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { appWithTranslation, SSRConfig, useTranslation } from 'next-i18next'
import { SWRConfig } from 'swr'

import CookieConsent from '../components/molecules/CookieConsent'
import Navigation from '../components/molecules/Navigation'
import { ContentPageEntityFragment } from '../graphql'
import nextI18NextConfig from '../next-i18next.config'
import { initializeGoogleAnalytics, useGoogleAnalyticsPageView } from '../utils/googleAnalytics'
import { withAttributes } from '../utils/isDefined'
import { logError } from '../utils/logger'

initializeGoogleAnalytics()

type PageProps = SSRConfig & { contentPage?: ContentPageEntityFragment }
type Props = AppProps<PageProps>

const CustomApp = ({ Component, pageProps }: Props) => {
  const { t } = useTranslation()
  useGoogleAnalyticsPageView()

  return (
    <>
      <Head>
        <title>{t('common.welcome')}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SWRConfig
        value={{
          onError: (error: unknown) => {
            logError(error)
          },
        }}
      >
        <Script src="https://partners.goout.net/sk-bratislava/gmbsk.js" />

        <header className="flex">
          {/* TODO fix: contentPage is always undefined */}
          <Navigation contentPage={withAttributes(pageProps?.contentPage) ?? undefined} />
        </header>
        <main className="scroll-mt-nav">
          <Component {...pageProps} />
        </main>
        <CookieConsent />
      </SWRConfig>
    </>
  )
}

export default appWithTranslation(CustomApp, nextI18NextConfig)
