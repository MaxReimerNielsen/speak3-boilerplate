const config = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],

    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
};

module.exports = config;
