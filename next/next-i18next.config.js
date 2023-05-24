const path = require('path')

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'sk',
    locales: ['en', 'sk'],
    localeDetection: false,
    returnNull: false,
  },
  serializeConfig: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: path.resolve('./public/locales'),
}
