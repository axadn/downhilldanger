var path = require("path");
module.exports = {
  entry: "./crazy_motorcycle.js",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
  },
  devtool: 'source-maps'
};
