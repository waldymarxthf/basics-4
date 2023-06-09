module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'no-var': 'error',
    'linebreak-style': 0,
    'import/no-cycle': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'import/no-mutable-exports': 'off',
    'no-shadow': 'error',
  },
};
