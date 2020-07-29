// const glob = require("glob")
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const glob = {}

// entry 匹配路径
const jsRegx = './src/pages/*/index.js'
// html 模板匹配路径
const htmlRegx = './src/pages/*/index.html'


const getEntry = (mode) => (fileRegx) => {
  const entry = {}

  const files = glob.sync(fileRegx || jsRegx)

  files.forEach((file, index) => {
    const result = (/src\/.+\/(.+)\//ig).exec(file)
    // 获取页面 name
    const name = result[1]

    entry[name] = [
      // mode === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),
      file
    ]
  })

  return entry
}


const getHtmlWebpackPlugins = (mode) => (fileRegx) => {
  const plugins = []

  const files = glob.sync(fileRegx || htmlRegx)

  files.forEach((file, index) => {
    const result = (/src\/.+\/(.+)\//ig).exec(file)
    // 获取页面 name
    const name = result[1]

  //   plugins.push(new HtmlWebpackPlugin(
  //     Object.assign(
  //       {},
  //       {
  //         inject: true,
  //         filename: `${name}.html`,
  //         template: file,
  //         chunks: [name]
  //       },
  //       mode === 'production'
  //         ? {
  //             minify: {
  //               removeComments: true,
  //               collapseWhitespace: true,
  //               removeRedundantAttributes: true,
  //               useShortDoctype: true,
  //               removeEmptyAttributes: true,
  //               removeStyleLinkTypeAttributes: true,
  //               keepClosingSlash: true,
  //               minifyJS: true,
  //               minifyCSS: true,
  //               minifyURLs: true,
  //             },
  //           }
  //         : undefined
  //       )
  //     )
  //   )
  })

  return plugins
}


export default {
  getEntry,
  getHtmlWebpackPlugins
}
