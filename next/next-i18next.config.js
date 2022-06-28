const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'sk',
    locales: ['en', 'sk'],
    serializeConfig: false,
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: path.resolve('./public/locales'),
}
