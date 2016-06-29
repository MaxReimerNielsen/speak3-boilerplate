const webpack = require('webpack');
const webpackBasicConfig = require('./webpack-basic.config');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.assign({}, webpackBasicConfig, {
  entry: [
    path.join(__dirname, '/src/App.js'),
  ],

  output: {
    path: buildPath,
    filename: 'app.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      favicon: path.join(__dirname, '/public/images/favicon.ico'),
      template: path.join(__dirname, '/public/index.html'),
    }),
    // Allows for sync with browser while developing (like BorwserSync)
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warninggs but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
  ],
});

module.exports = config;
