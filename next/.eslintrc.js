module.exports = {
  extends: ['auto', 'plugin:tailwindcss/recommended', 'plugin:@next/next/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    /** We use this a lot with isDefined and hasAttributes */
    'unicorn/no-array-callback-reference': 'off',
    /** Named export is easier to refactor automatically */
    'import/prefer-default-export': 'off',
    /** Too tedious to type every function return explicitly */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /** Not needed */
    'react/require-default-props': 'off',
    /** We prefer arrow functions */
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    /** It's annoying to refactor from one style to another */
    'arrow-body-style': 'off',
    /** These are exceptions that we use with "__" */
    'no-underscore-dangle': [
      2,
      { allow: ['__NEXT_DATA__', '__NEXT_LOADED_PAGES__', '__typename'] },
    ],
    /** Use official sorting */
    'tailwindcss/classnames-order': [
      'warn',
      { callees: ['classnames', 'cx'], officialSorting: true },
    ],
    /** White list custom classes */
    'tailwindcss/no-custom-classname': ['warn', { whitelist: ['.*dw.*', '.*dh.*'] }],
    /** Hoisting of functions is useful */
    '@typescript-eslint/no-use-before-define': 'off',
    /** Doesn't play well with translations */
    'sonarjs/no-duplicate-string': 'off',
    /** A lot of false postives */
    'no-secrets/no-secrets': 'off',
    /** We use img on purpose */
    '@next/next/no-img-element': 'off',
    /** Strapi and graphql somehow produce a lot of eslint errors with this rules */
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'lodash/prefer-noop': 'off',
    'unicorn/switch-case-braces': 'off',
    /** Translation t function is typed as any */
    '@typescript-eslint/restrict-template-expressions': 'off',
    'import/extensions': 'off',
  },
  ignorePatterns: ['*.config.*', 'src/services/graphql', '.eslintrc.js', '*.md'],
}
