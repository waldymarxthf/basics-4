module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  "extends": "eslint:recommended",
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
		"eqeqeq": "1",
		"no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "max-classes-per-file": ["error", 10],
    "import/prefer-default-export": "off",
    "prefer-const": "warn",
    "no-var": "error",
    "for-direction": "error",
    "no-shadow": "error"
  },
};
