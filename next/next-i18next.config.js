const path = require('path')

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'sk',
    locales: ['en', 'sk'],
    localeDetection: false,
  },
  defaultNS: ['translation'], // Changed to match the namespace used by i18next-parser
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
