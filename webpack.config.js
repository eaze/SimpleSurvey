const path = require("path");

const config = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/build"
  },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.jsx?$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};

module.exports = config;
