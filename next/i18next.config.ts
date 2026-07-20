import { defineConfig } from 'i18next-cli'
import i18nextConfig from './next-i18next.config'

// Docs: https://github.com/i18next/i18next-cli
export default defineConfig({
  locales: i18nextConfig.i18n.locales,
  extract: {
    input: 'src/**/*.{tsx,ts}',
    output: './public/locales/{{language}}/{{namespace}}.json',
    defaultNS: 'translation',
    keySeparator: false,
    functions: ['t', '*.t'],
    transComponents: ['Trans'],
  },
  // Types are currently not needed by us
  // types: {
  //   input: ['public/locales/{{language}}/{{namespace}}.json'],
  //   output: 'src/types/i18next.d.ts',
  // },
})
