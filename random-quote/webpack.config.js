var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(woff2?|ttf|eot|svg|jpg)$/,
      loader: 'url?limit=10000'
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
      template: './index.jade'
    })
  ],
  devServer: {
    inline: true,
    port: 3636
  }
}
