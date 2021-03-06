module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    "react/prefer-stateless-function":'off',
    "react/state-in-constructor":'off',
    "no-unused-expressions":['error',{allowShortCircuit: true, allowTernary: true,allowTaggedTemplates:true }],
    "react/prop-types":"off",
    "react/static-property-placement":"off",
  },
};
