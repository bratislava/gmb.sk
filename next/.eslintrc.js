module.exports = {
  extends: ['auto'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    /** We use this a lot with isDefined and hasAttributes */
    'unicorn/no-array-callback-reference': 'off',
    // Named export is easier to refactor automatically
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
  ignorePatterns: ['*.config.*', 'graphql'],
}
