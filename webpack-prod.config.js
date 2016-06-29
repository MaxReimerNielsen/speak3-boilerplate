const webpack = require('webpack');
const webpackBasicConfig = require('./webpack-basic.config');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.assign({}, webpackBasicConfig, {
  entry: {
    app: path.join(__dirname, '/src/App.js'),
    vendor: ['react', 'react-dom', 'react-router', 'history'],
  },

  output: {
    path: buildPath,
    filename: 'app.[hash].js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      sourceMap: false,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      favicon: path.join(__dirname, '/public/images/favicon.ico'),
      template: path.join(__dirname, '/public/index.html'),
    }),
  ],
});

module.exports = config;
