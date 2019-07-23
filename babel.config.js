const { NODE_ENV } = process.env;

module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            browsers: [
              'last 2 Chrome versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 Edge versions',
            ],
          },
          debug: NODE_ENV === 'production',
          useBuiltIns: 'usage',
          corejs: '3.0.1',
        },
      ],
      '@babel/react',
    ],
    plugins: ['@babel/syntax-dynamic-import', '@babel/proposal-class-properties'],
    env: {
      development: {
        plugins: ['@babel/transform-runtime', 'react-hot-loader/babel'],
      },
    },
  };
};
