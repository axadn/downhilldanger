var path = require("path");
module.exports = {
  entry: "./downhill_hazard.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js",
  },
  devtool: 'source-maps'
};
