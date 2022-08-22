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
  const router = useRouter()

  useEffect(() => {
    const { performanceCookies } = getGDPRCookies()
    if (!performanceCookies) {
      return
    }

    ReactGA.pageview(router.asPath)
  }, [router.asPath])
}
