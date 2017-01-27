const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectRoot = path.resolve(__dirname);

module.exports = {
  entry: path.join(projectRoot, '/src/main.js'),
  output: {
    path: path.join(projectRoot, '/build'),
    filename: 'bundle.js',
  },
  // how to use?
  resolve: {
    extensions: ['', '.js', '.vue', '.json', '.scss'],
    fallback: [path.join(__dirname, '/node_modules')],
    alias: {
      // vue$: 'vue/dist/vue.common.js',
      src: path.resolve(__dirname, '../src'),
      data$: '../src/assets/data.js',
      components: path.resolve(__dirname, '../src/components'),
    },
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass',
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
  ],
  devServer: {
    inline: true,
    port: 3636,
  },
};
