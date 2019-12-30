const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "9000";

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    host: HOST,
    port: PORT,
    compress: true,
    inline: true,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
  ]
});
