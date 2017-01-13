var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, './main.js'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/100-days-of-code/flappybird/',
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
        // what did the postcss do?
        // loaders: ['style', 'css', 'postcss', 'sass']
    }, {
      test: /\.(|png|jpg)$/,
      loader: 'url?limit=10000'
    }, {
      test: /\.jade$/,
      loader: 'jade'
    }]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.jade'
    }),
    new CopyWebpackPlugin([{
      from: './img',
      to: 'img'
    }]),
  ]
};
