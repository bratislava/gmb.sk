module.exports = {
  extends: ['auto'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    /** Next.js handles */
    'react/react-in-jsx-scope': 'off',
    /** We use this a lot with isDefined and hasAttributes */
    'unicorn/no-array-callback-reference': 'off',
    // Named export is easier to refactor automatically
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    /** It's annoying to refactor from one style to another */
    'arrow-body-style': 'off',
    'no-underscore-dangle': [2, { allow: ['__NEXT_DATA__', '__NEXT_LOADED_PAGES__', '__typename'] }],
    'no-secrets/no-secrets': ['error', { ignoreContent: '^http' }],
  },
  ignorePatterns: ['*.config.*', 'graphql'],
}
