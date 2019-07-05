const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
})
