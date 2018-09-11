const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: 'bundle.js',
    publicPath: '/js'
  },
  devServer: {
    contentBase: 'public',
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
};