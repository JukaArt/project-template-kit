import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import StyleLintPlugin from 'stylelint-webpack-plugin';

import { DIST, SRC } from './paths';
import fontRules from './rules-fonts';
import javaScriptRules from './rules-javascript';
import mediaRules from './rules-media';
import styleRules from './rules-styles';
import alias from './alias.js';


export default {
  context: SRC,

  entry: [
    'regenerator-runtime/runtime',
    'whatwg-fetch',
    './scripts/index',
  ],

  output: {
    filename: 'bundle.js',
    path: DIST,
    publicPath: '/',
  },

  module: {
    rules: [
      ...fontRules,
      ...javaScriptRules,
      ...styleRules,
      ...mediaRules,
    ],
  },

  resolve: {
    alias,
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: `${SRC}/templates/index.html`,
      title: 'Insense'
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].bundle.css',
    }),
    new SpriteLoaderPlugin(),
    new ImageminPlugin({
      gifsicle: {
        interlaced: true,
      },
      jpegtran: {
        progressive: true,
      },
      svgo: null,
    }),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      // syntax: 'scss',
    }),
  ],

  devtool: 'source-map',

  performance: {
    hints: 'warning',
  },

  profile: true,
};
