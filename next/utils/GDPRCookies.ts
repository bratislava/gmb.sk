import { Cookies } from 'react-cookie-consent'

export interface GDPRCookies {
  securityCookies: boolean
  performanceCookies: boolean
  advertisingAndTargetingCookies: boolean
}

const GDPR_COOKIE_KEY = 'city-gallery-gdpr'

export const setGDPRCookies = (cookies: GDPRCookies) => {
  Cookies.set(GDPR_COOKIE_KEY, JSON.stringify(cookies), { expires: 365 })
}

export const getGDPRCookies = (): GDPRCookies => {
  const cookies = Cookies.get(GDPR_COOKIE_KEY)

  if (cookies) {
    return JSON.parse(cookies) as GDPRCookies
  }

  /** Default values */
  return {
    securityCookies: true,
    performanceCookies: false,
    advertisingAndTargetingCookies: false,
  }
}
