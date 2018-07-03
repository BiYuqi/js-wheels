const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const resolve = (dir) => {
  return path.join(__dirname, './', dir)
}
const production = process.env.NODE_ENV === 'production' || false
module.exports = {
  entry: {
    'js-wheels': './src/index.js'
  },
  output: {
    filename: production ? 'js-wheels.min.js' : 'js-wheels.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'JsWheels',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
