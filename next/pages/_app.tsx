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
