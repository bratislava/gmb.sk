import { createNextConfig } from '@bratislava/eslint-config-next'

export default [
  ...createNextConfig({
    ignores: ['src/services/graphql/**'],
  }),

  // Project-specific rule overrides
  {
    rules: {
      'arrow-body-style': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'react/display-name': 'off',
      'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
      // tailwindcss overrides
      'tailwindcss/classnames-order': ['warn', { callees: ['classnames', 'cx'], officialSorting: true }],
      'tailwindcss/no-custom-classname': ['warn', { whitelist: ['.*dw.*', '.*dh.*'] }],
      // violations downgraded to warn
      '@typescript-eslint/no-unnecessary-condition': 'warn', // 100 violations
      'sonarjs/single-character-alternation': 'warn', // 23 violations
      '@typescript-eslint/no-unused-vars': 'warn', // 17 violations
      '@typescript-eslint/no-unsafe-argument': 'warn', // 15 violations
      '@typescript-eslint/consistent-type-definitions': 'warn', // 14 violations
      '@typescript-eslint/promise-function-async': 'warn', // 13 violations
      'react-hooks/set-state-in-effect': 'warn', // 8 violations
      '@typescript-eslint/no-deprecated': 'warn', // 5 violations
      'react-hooks/refs': 'warn', // 4 violations
      '@typescript-eslint/no-unnecessary-type-arguments': 'warn', // 3 violations
      '@typescript-eslint/no-unnecessary-template-expression': 'warn', // 3 violations
      'sonarjs/regex-complexity': 'warn', // 3 violations
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn', // 3 violations
      'sonarjs/no-redundant-optional': 'warn', // 2 violations
      '@typescript-eslint/require-await': 'warn', // 2 violations
      'sonarjs/no-globals-shadowing': 'warn', // 2 violations
      '@typescript-eslint/no-unnecessary-type-conversion': 'warn', // 2 violations
      '@typescript-eslint/no-empty-object-type': 'warn', // 1 violation
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'warn', // 1 violation
      'sonarjs/prefer-regexp-exec': 'warn', // 1 violation
      'react-hooks/immutability': 'warn', // 1 violation
      '@typescript-eslint/no-explicit-any': 'warn', // 1 violation
      '@typescript-eslint/ban-ts-comment': 'warn', // 1 violation
      'no-implicit-coercion': ['warn', { boolean: false }], // 1 violation
      'sonarjs/slow-regex': 'warn', // 1 violation
    },
  },
]
