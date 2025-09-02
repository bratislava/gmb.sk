export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  /**
   * Setting up strapi::security middleware to avoid some blocking (e.g. thumbnails in Media Library are not shown without this setting).
   * Followed readme of Google Cloud provider package, because I couldn't find it in documentation of strapi nor minio provider package.
   * https://github.com/strapi-community/strapi-provider-upload-google-cloud-storage/blob/master/README.md#setting-up-strapisecurity-middlewares-to-avoid-csp-blocked-url
   */
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'cdn-api.bratislava.sk',
            `${env('MINIO_BUCKET')}.s3.bratislava.sk`,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'cdn-api.bratislava.sk',
            `${env('MINIO_BUCKET')}.s3.bratislava.sk`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]
