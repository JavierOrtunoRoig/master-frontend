const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/index.jsx', //Puedo borrar la entada de estilos porque los vamos a importar desde los archivos
  },
  output: {
    filename: "[name].[chunkhash].js",
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader'
        ]
      },
     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // Fichero en dist
      template: "./src/index.html", // Fichero de entrada ./src
      scriptLoading: "blocking",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].[chunkhash].css"
    })
  ],
  stats: "errors-only"
};