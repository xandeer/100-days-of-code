var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: ['./config.js', './main.js'],
  entry: './main.js',
  output: {
    filename: 'bundle.js'
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.jade'
    })
  ],
  devServer: {
    inline: true,
    port: 3636
  }
}
