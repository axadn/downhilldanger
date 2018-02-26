var path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: "./downhill_hazard.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js",
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
