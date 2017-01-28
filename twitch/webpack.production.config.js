const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const projectRoot = path.resolve(__dirname);

module.exports = {
  entry: path.join(projectRoot, '/src/main.js'),
  output: {
    publicPath: '/100-days-of-code/twitch/',
    path: path.join(projectRoot, '/build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader',
        'css-loader!sass-loader'),
    }, {
      test: /\.pug$/,
      loader: 'pug',
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: [
        path.join(projectRoot, 'src'),
      ],
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
    new HtmlWebpackPlugin({
      template: path.join(projectRoot, '/src/index.pug'),
    }),
    new ExtractTextPlugin('style.css'),
  ],
};
