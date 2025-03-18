import { useRouter } from 'next/router'
import * as ReactGA from 'react-ga'

import { getGDPRCookies } from '@/src/utils/GDPRCookies'
import { getGoogleAnalyticsTrackingId } from '@/src/utils/getGoogleAnalyticsTrackingId'
import useUpdateEffect from '@/src/utils/useUpdateEffect'

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

  useUpdateEffect(() => {
    const { performanceCookies } = getGDPRCookies()
    if (!performanceCookies) {
      return
    }

    trackPageView(router.asPath)
  }, [router.asPath])
}

export const trackPageView = (url: string) => {
  ReactGA.pageview(url)
}
