const webpack = require('webpack');
const merge = require('webpack-merge');
const { host, port } = require('./config');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    `../src/index.ts`,
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [].concat(getStyle(true)),
  },
  output: {
    publicPath: '/',
    filename: 'assets/[hash:8].[name].js',
    chunkFilename: 'assets/[contenthash:8].[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({}),
  ],
  devServer: {
    host,
    port,
    inline: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true, // using html5 router.
    contentBase: distPath,
  },
});
