const webpack = require("webpack");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          REACT_APP_CORE_API: JSON.stringify("http://localhost:8000/api/")
        }
      }
    })
  ]
};
