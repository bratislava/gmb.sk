import { useEffect, useState } from 'react'
import { getGDPRCookies } from './GDPRCookies'
import { getGoogleAnalyticsTrackingId } from './getGoogleAnalyticsTrackingId'
import * as ReactGA from 'react-ga'
import { isServer } from './envDetection'

export const initializeGoogleAnalytics = () => {
  if (isServer()) {
    return
  }

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
