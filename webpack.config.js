const path = require("path");
const fs = require("fs");

module.exports = {
  // 入口文件
  entry: "./src/index.js",
  // 出口文件
  output: {
    // 输出的路径
    path: path.resolve(__dirname, "dist"),
    //输出文件的名字 [原来的名字].js
    filename: "[name].js",
    //
    library: "MyLibrary",
    libraryTarget: "umd",
    //
    chunkFilename: "[id].js",
  },
  resolve: {
    // 设置路径
    alias: {
      xyz$: path.resolve(__dirname, ""),
      // 按照数组中的顺序解析以下文件
      extensions: [".js", ".vue", ".css", ".json"],
    },
  },
  plugins: [new webpack.SourceMapDevToolPlugin({})],
  devtool: false,
  module: {
    rules: [
      {
        test: "",
        type: "",
        use: [
          {
            loader: "",
            options: {
              importLoaders: "",
            },
          },
        ],
      },
    ],
  },
};
