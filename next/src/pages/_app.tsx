import '@/src/styles/globals.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { appWithTranslation, SSRConfig, useTranslation } from 'next-i18next'
import { NextAdapter } from 'next-query-params'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SWRConfig } from 'swr'
import { QueryParamProvider } from 'use-query-params'

import nextI18NextConfig from '@/next-i18next.config'
import { initializeGoogleAnalytics, useGoogleAnalyticsPageView } from '@/src/utils/googleAnalytics'
import { isProd } from '@/src/utils/isProd'
import { logError } from '@/src/utils/logger'

initializeGoogleAnalytics()

const CustomApp = ({ Component, pageProps }: AppProps<SSRConfig>) => {
  const { t } = useTranslation()
  useGoogleAnalyticsPageView()

  const queryClient = new QueryClient()

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
      <QueryClientProvider client={queryClient}>
        <QueryParamProvider adapter={NextAdapter}>
          <SWRConfig
            value={{
              onError: (error: unknown) => {
                logError(error)
              },
            }}
          >
            <Script src="https://partners.goout.net/sk-bratislava/gmbsk.js" />

            {isProd() ? (
              <Script
                strategy="afterInteractive"
                data-domain="gmb.sk"
                src="https://plausible.io/js/script.outbound-links.file-downloads.js"
              />
            ) : null}

            <Component {...pageProps} />
          </SWRConfig>
        </QueryParamProvider>
      </QueryClientProvider>
    </>
  )
}

export default appWithTranslation(CustomApp, nextI18NextConfig)
