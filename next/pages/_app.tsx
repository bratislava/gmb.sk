import { appWithTranslation, useTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Navigation from '../components/molecules/Navigation'
import '../styles/globals.css'

function CustomApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation()
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
      <ParallaxProvider>
        <div className="app">
          <header className="flex">
            <Navigation contentPage={pageProps?.contentPage} />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ParallaxProvider>
    </>
  )
}

export default appWithTranslation(CustomApp, {
  i18n: {
    defaultLocale: 'sk',
    locales: ['en', 'sk'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath:
    process.env.NODE_ENV === 'development'
      ? require('path').resolve('./public/locales')
      : require('path').resolve('./public/locales'),
})
