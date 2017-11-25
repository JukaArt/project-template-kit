import webpack, {LoaderOptionsPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
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
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'whatwg-fetch',
    './scripts/index',
  ],

  output: {
    filename: 'bundle.js',
    path: DIST,
    publicPath: '/',
    pathinfo: true,
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
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.STRIPE_KEY': JSON.stringify('pk_test_edr0ke4RskVr89MIoAAsGZkz'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC}/templates/index.html`,
      title: 'Insense Dev'
    }),
    new ExtractTextPlugin({
      disable: true,
    }),
    new SpriteLoaderPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      // syntax: 'scss',
    }),
    // new LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false,
    //   options: { postcss }
    // }),
  ],

  devtool: 'eval-source-map',
};
