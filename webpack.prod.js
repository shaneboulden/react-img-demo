const merge = require('webpack-merge');
const webpack = require("webpack");
const {GenerateSW} = require('workbox-webpack-plugin');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: __dirname + "/build"
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new GenerateSW(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react','@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties','@babel/plugin-proposal-export-default-from']
          }
        }
      }
    ],
  }
});
