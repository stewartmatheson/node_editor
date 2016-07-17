const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app.ts',
  output: { path: path.__dirname, filename: 'bundle.js' },
  devtool : 'source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
}
