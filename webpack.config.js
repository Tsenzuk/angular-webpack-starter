
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin       = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: __dirname + '/src',
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
      template: './src/index.html',
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
