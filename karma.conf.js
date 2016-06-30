const webpackTestConfig = require('./webpack-test.config');

function mergeFilesWithArgv(staticFiles) {
  let source = staticFiles;
  const argv = process.argv;
  let firstTime = true;

  argv.forEach((arg) => {
    const index = arg.indexOf('--check=');
    const checkString = arg.substring(8);

    if (index !== -1) {
      if (firstTime) {
        source = [checkString];
        firstTime = false;
      }

      source.push(checkString);
    }
  });

  return source;
}

const fileGlob = 'src/**/*.spec.js';
process.env.NODE_ENV = 'test';

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    files: mergeFilesWithArgv([fileGlob]),
    preprocessors: {
      [fileGlob]: ['webpack'],
    },
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'coverage/', subdir: '.' },
        { type: 'json', dir: 'coverage/', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
    port: 7002,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE'],
    singleRun: true,
    concurrency: Infinity,
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true,
      silence: true,
    },
  });
};
