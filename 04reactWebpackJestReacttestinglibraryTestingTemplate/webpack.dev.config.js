const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshBabel = require("react-refresh/babel");

/** for .env file env variable
 * only npm install dotenv
 */
// const webpack = require("webpack");
// require("dotenv").config();

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: false,
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [ReactRefreshBabel],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "04 development javascript webapck template",
      template: "src/index.hbs",
      meta: {
        viewport: "width=device-width, initial-scale=1",
        description: "iK SEO describe",
        keywords:
          "iK SEO keywords, however it might not be necessary because it counts for little for google",
      },
      publicPath: "/",
    }),
    new ReactRefreshWebpackPlugin(),

    /** for .env file env variable */
    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify("development"),
    //   // "process.env": {
    //   //   DOMAIN_AUTH0: JSON.stringify(process.env.DOMAIN_AUTH0),
    //   //   CLIENT_ID_AUTH0: JSON.stringify(process.env.CLIENT_ID_AUTH0),
    //   //   GTESTINGENV: JSON.stringify(process.env.GTESTINGENV),
    //   // },
    // }),
  ],
};
