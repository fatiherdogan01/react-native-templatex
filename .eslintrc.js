module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    'import/order': 'error',
    'no-console': 'error',
  },
};
