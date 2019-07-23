const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { NODE_ENV, BUNDLE_ANALYZE } = process.env;

const isProd = NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? '' : 'source-map',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProd,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(woff2?|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              publicPath: `/fonts`,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              name: '[name]-[hash].[ext]',
              publicPath: `/assets`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV,
      }),
    }),
    new HtmlPlugin({
      template: './index.html',
      publicPath: '',
      minify: {
        removeTagWhitespace: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? 'styles/[name].[hash].css' : '[name].css',
      chunkFilename: isProd ? 'styles/[name].[hash].css' : '[id].css',
    }),
    new CopyPlugin(['public']),
    BUNDLE_ANALYZE ? new BundleAnalyzerPlugin() : () => {},
  ],
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
    compress: true,
    open: true,
    overlay: {
      errors: true,
    },
  },
};
