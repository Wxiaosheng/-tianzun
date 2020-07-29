const path = require('path')

module.exports = {
  entry: {
    'autowebpackentryplugin': './src/index.js',
    'autowebpackentryplugin.min': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: 'autoWebpackEntryPlugin',
    libraryTarget: 'umd',
  },
  mode: 'production',
  module: {
    noParse: /glob/,
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      }
    ]
  },
  target: 'node',
  externals: {
    glob: 'commonjs2 glob',
    HtmlWebpackPlugin: 'commonjs2 html-webpack-plugin',
    reactDevUtils: 'commonjs2 react-dev-utils',
  }
}