var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, './main.js'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/100-days-of-code/portfolio/',
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(woff2?|ttf|eot|svg|jpg)$/,
      loader: 'url?limit=10000'
    }, {
      test: /bootstrap\/dist\/js\/umd\//,
      loader: 'imports?jQuery=jquery'
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
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: './index.jade'
    }),
  ]
};
