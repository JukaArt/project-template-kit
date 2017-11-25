/* eslint-disable no-console */
/* eslint-disable comma-dangle */
import path from 'path';
import express from 'express';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import proxyMiddleware from 'http-proxy-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';

import webpackConfig from '../webpackConfig/config.dev';

const env = process.env.NODE_ENV;
const bs = browserSync.create();
const compiler = webpack(webpackConfig);

const PORT = 3000;

const devMiddlewareOptions = {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    context: webpackConfig.context,
    hash: false,
    version: false,
    timings: false,
    entrypoints: true,
    chunkOrigins: true,
    chunkModules: false,
    children: false,
    colors: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  },
};

bs.init({
  server: {
    baseDir: 'src',

    // middleware: [
    //   proxyMiddleware('/api', {
    //     pathRewrite: {'^/api' : '/'},
    //     target: '',
    //     changeOrigin: true,
    //     ws: true,
    //   }),
    //   historyApiFallback(),
    //   webpackDevMiddleware(compiler, devMiddlewareOptions),
    //   webpackHotMiddleware(compiler),
    // ],
  },

  port: 8080,

  ui: {
    port: 8081,
  },

  open: false,
  reloadOnRestart: true,

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/css/*.css',
    // 'dist/*.html',
  ],
});

bs.emitter.on('init', () => {
  console.log(chalk.green(
    `
[BS]  Browsersync server is running.
[BS]  NODE_ENV is set to ${chalk.white.bold(env)}.
[BS]  Access URLs are listed below.
    `
  ));
});
