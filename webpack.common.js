const path = require('path')

module.exports = {

  context: path.resolve(__dirname, 'src'),
  entry: './index.js',

  resolve: {
    extensions: ['.js', '.css', '.scss', '.sass']
  },
  
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              filename: '[name].[hash].[ext]',
              outputPath: 'images',
            }
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: 'assets/fonts',
        }
      },
    ]
  }
}
