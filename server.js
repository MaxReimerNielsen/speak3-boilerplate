const jsonMockServer = require('./server-json-mock');
const webpackDevServer = require('./server-webpack-dev');

const PORT = 7000;

console.log('Booting up servers..'); // eslint-disable-line no-console

jsonMockServer(PORT + 1);
webpackDevServer(PORT);
