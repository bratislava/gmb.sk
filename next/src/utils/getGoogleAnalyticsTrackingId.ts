import { logError } from '@/src/utils/logger'

export const getGoogleAnalyticsTrackingId = () => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID) {
    logError('NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID is not set')

    return
  }

  // eslint-disable-next-line consistent-return
  return process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID
}
