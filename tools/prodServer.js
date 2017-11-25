/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import compression from 'compression';
import chalk from 'chalk';

const env = process.env.NODE_ENV;
const bs = browserSync.create();

bs.init({
  server: {
    baseDir: ['dist'],

    middleware: [
      historyApiFallback(),
      compression(),
    ],
  },

  port: 4000,

  ui: {
    port: 4001,
  },

  open: false,
  reloadOnRestart: true,
});

bs.emitter.on('init', () => {
  console.log(chalk.green(
    `[BS]  Browsersync server is running.
[BS]  NODE_ENV is set to ${chalk.white.bold(env)}.
[BS]  Access URLs are listed below.
    `
  ));
});
