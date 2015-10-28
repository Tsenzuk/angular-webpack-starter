
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin       = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['webpack/hot/dev-server', './app/app.js']
  },
  output: {
    path: './dist',
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new CleanPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Angular - CRUD',
      description: 'Angular CRUD boilerplate',
      template: './public/index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
       { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' }
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
