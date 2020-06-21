let webpack = require("webpack");
let path = require("path");
require("idempotent-babel-polyfill");

let parentDir = path.join(__dirname);
console.log(parentDir);
module.exports = {
  mode: "development",
  entry: ["idempotent-babel-polyfill", path.join(parentDir, "index.js")],
  devtool: "source-map",
  plugins: [new webpack.NamedModulesPlugin(), new webpack.NamedChunksPlugin(), new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("dev") })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    path: parentDir + "/dist",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    port: 4000,
  },
};
