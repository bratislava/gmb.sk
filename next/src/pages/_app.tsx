import '@/src/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { appWithTranslation, SSRConfig, useTranslation } from 'next-i18next'
import { NextAdapter } from 'next-query-params'
import { QueryParamProvider } from 'use-query-params'

import nextI18NextConfig from '@/next-i18next.config'
import { isProd } from '@/src/utils/isProd'

const CustomApp = ({ Component, pageProps }: AppProps<SSRConfig>) => {
  const { t } = useTranslation()

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
          {isProd() ? (
            <Script
              strategy="afterInteractive"
              data-domain="gmb.sk"
              src="https://plausible.io/js/script.outbound-links.file-downloads.js"
            />
          ) : null}
          <Component {...pageProps} />
        </QueryParamProvider>
      </QueryClientProvider>
    </>
  )
}

export default appWithTranslation(CustomApp, nextI18NextConfig)
