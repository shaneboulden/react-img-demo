const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            // Limit at 50k. larger files emited into separate files
            limit: 5000,
            outputPath: 'fonts',
            name: '[name].[ext]',
          }
        },
        include: function(input) {
          // only process modules with this loader
          // if they live under a 'fonts' or 'pficon' directory
          return input.indexOf('fonts') > -1 || input.indexOf('pficon') > -1;
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              outputPath: 'images',
              name: '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'raw-loader',
          options: {}
        },
        include: function(input) {
          // only process SVG modules with this loader when they don't live under a 'bgimages',
          // 'fonts', or 'pficon' directory, those are handled with other loaders
          return (input.indexOf('bgimages') === -1) &&
            (input.indexOf('fonts') === -1) &&
            (input.indexOf('background-filter') === -1) &&
            (input.indexOf('pficon') === -1);
        }
      }
    ]
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './build')
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './build'),
    }
  },
};
