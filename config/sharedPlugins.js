const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
   beautify: false,
   mangle: {
     screw_ie8: true,
     keep_fnames: true
   },
   compress: {
     screw_ie8: true
   },
   comments: false
 }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/../app/index.html'),
    inject: 'body',
    filename: 'index.html',
  }),
];

module.exports = plugins;
