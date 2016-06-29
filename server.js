const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack-dev.config');

const PORT = 7000;

config.entry.unshift(
  `webpack-dev-server/client?http://localhost:${PORT}/`,
  'webpack/hot/dev-server'
);

// You get a lot of warnings if you run the server from CMD opened from Code
// This is because node is case sensitive and, windows is giving mixed results
// when cmd is opened in all-lower-case like c:\some\path where the drive is actually
// in uppercase like C:\some\path.
// Opnening the cmd from explorer solves that issue.
const frontServer = new WebpackDevServer(webpack(config), {
  stats: { colors: true },
  hot: true,
  contentBase: 'public',
  historyApiFallback: true,
});
frontServer.listen(PORT, 'localhost');

console.log('Booting up server..'); // eslint-disable-line no-console
