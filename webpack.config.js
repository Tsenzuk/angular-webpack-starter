
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin       = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./app/app.js']
  },
  output: {
    path: './dist',
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new CleanPlugin(['dist']),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("[name]-[hash].css"),
    new HtmlWebpackPlugin({
      title: 'Angular - CRUD',
      description: 'Angular CRUD boilerplate',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' },

      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus?sourceMap') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less?sourceMap') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },

      { test: /\.woff2?(.*)?$/, loader: "file?name=fonts/[name].[ext]" },
      { test: /\.(ttf|eot|svg)(.*)?$/, loader: "file?name=fonts/[name].[ext]" },
      { test: /\.png|\.jpg|\.gif$/, loader: 'file?name=img/[path][name].[ext]' }
    ]
  },
  devServer: {
    contentBase: './dist',
    colors: true,
    noInfo: false,
    hot: true,
    inline: false
  }
};
