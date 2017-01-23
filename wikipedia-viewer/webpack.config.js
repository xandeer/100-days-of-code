var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: "style!css!sass"
    }, {
      test: /\.pug$/,
      loader: 'pug'
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
      template: './src/index.pug'
    }),
  ],
  devServer: {
    inline: true,
    port: 3636
  }
}
