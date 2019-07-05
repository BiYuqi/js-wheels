const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const prod = process.env.NODE_ENV === 'production' || false

module.exports = {
  entry: {
    main: prod ? resolve('./src/index.js') : resolve('./src/index.dev.js')
  },
  output: {
    filename: prod ? 'js-wheels.min.js' : 'js-wheels.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'JsWheels',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
