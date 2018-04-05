const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const path = require('path')
module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
})
