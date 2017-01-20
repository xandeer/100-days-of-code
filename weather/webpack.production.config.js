var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/main.js',
  output: {
    publicPath: '/100-days-of-code/weather/',
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader",
        "css-loader!sass-loader")
    }, {
      test: /\.jade$/,
      loader: 'jade'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.jade'
    }),
    new ExtractTextPlugin("style.css")
  ]
}
