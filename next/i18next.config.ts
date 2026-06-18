import { defineConfig } from 'i18next-cli'

export default defineConfig({
  locales: ['sk', 'en'],
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
