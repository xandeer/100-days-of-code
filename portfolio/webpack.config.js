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
        // what did the postcss do?
        // loaders: ['style', 'css', 'postcss', 'sass']
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
}
}
