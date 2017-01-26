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
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [path.join(__dirname, '/node_modules')],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      // 'src': path.resolve(__dirname, '../src'),
      // 'assets': path.resolve(__dirname, '../src/assets'),
      // 'components': path.resolve(__dirname, '../src/components')
    },
  },
  module: {
    loaders: [{
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
