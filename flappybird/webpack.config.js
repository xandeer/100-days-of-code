var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var devPort = 3636;

module.exports = {
  // entry: ['./config.js', './main.js'],
  // entry: './main.js',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:' + devPort,
    path.resolve(__dirname, './main.js')
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
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
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:' + devPort
    }),
    new HtmlWebpackPlugin({
      template: './index.jade'
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    progress: true,
    port: devPort
  }
};
