const { distPath, theme } = require('./config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: distPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader', options: {} },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true,
              modifyVars: theme,
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=10240',
      },
      {
        test: /\.(html|tpl)$/,
        loader: 'html-loader',
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {},
  },
  externals: {
    swiper: 'Swiper',
  },
  plugins: [new CleanWebpackPlugin()],
};
