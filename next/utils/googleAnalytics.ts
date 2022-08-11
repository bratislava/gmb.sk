import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as ReactGA from 'react-ga'

import { getGDPRCookies } from './GDPRCookies'
import { getGoogleAnalyticsTrackingId } from './getGoogleAnalyticsTrackingId'

export const initializeGoogleAnalytics = () => {
  const googleAnalyticsTrackingId = getGoogleAnalyticsTrackingId()
  if (!googleAnalyticsTrackingId) {
    return
  }

  const { performanceCookies } = getGDPRCookies()
  if (!performanceCookies) {
    return
  }

  ReactGA.initialize(googleAnalyticsTrackingId)
}

export const useGoogleAnalyticsPageView = () => {
  const { securityCookies } = getGDPRCookies()
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!securityCookies) {
        return
      }
      console.log('url', url)

      ReactGA.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events, securityCookies])
}
