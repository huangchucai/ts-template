module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    "node": true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'max-len': 'off',
    'guard-for-in': 'off',
    'comma-dangle': 'off',
    'valid-jsdoc': 'warn',
    'spaced-comment': 'warn',
    'eqeqeq': 'warn',
    'camelcase': 'warn',
    'no-invalid-this': 'warn',
    'no-undefined': 'warn',
    'no-fallthrough': 'warn',
    'no-new': 'off',
    'no-cond-assign': 'off',
    'complexity': 'warn',
    'max-depth': 'warn',
    'no-case-declarations': 'warn',
    'no-param-reassign': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'max-nested-callbacks': ['error', 4]
  }
}
