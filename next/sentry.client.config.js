// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { BrowserTracing } from '@sentry/tracing' // Must import second

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN || 'https://6054a49808e144c182fab778e6a33c72@o701870.ingest.sentry.io/6703546',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.2,
  integrations: [
    new BrowserTracing({
      /** List of urls where we want to add tracing headers. We generally want to track only requests to the APIs that we control */
      tracingOrigins: ['localhost', 'city-gallery-strapi.staging.bratislava.sk', 'city-gallery-strapi.bratislava.sk'],
      /** Explicitly disallow to add tracing headers to these 3rd party apis. If we add custom headers, the their server will return a cors error, because it's not configured for there headers. */
      shouldCreateSpanForRequest: (url) => {
        const isGoogleAnalytics = url.includes('google-analytics')
        const isGoOut = url.includes('goout')

        return !isGoogleAnalytics && !isGoOut
      },
    }),
  ],
})
