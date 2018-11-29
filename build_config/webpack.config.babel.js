import path from 'path'
//
import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
//

export default {
  mode: 'none',
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, '../src/server/public'),
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/app/index.html',
      filename: './index.html'
    })
  ]
}
