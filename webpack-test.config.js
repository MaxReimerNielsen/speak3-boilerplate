const webpackBasicConfig = require('./webpack-basic.config');

const config = Object.assign({}, webpackBasicConfig, {
  devtool: null,
  preLoaders: [],
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': 'window',
  },
});

module.exports = config;
