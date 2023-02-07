// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: '/'
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=[name].[ext]&publicPath=./&outputPath=./images/',
          'file-loader'
        ]
      },
    ],
  },
//   devServer: {
//     historyApiFallback: true,
//   },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "/public/index.html",
  //   }),
  // ],
};
