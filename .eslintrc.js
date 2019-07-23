module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-nested-ternary': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-await-in-loop': 'off',
    'no-shadow': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
    'react/jsx-wrap-multilines': {
      props: 'ignore',
    },
  },
};
