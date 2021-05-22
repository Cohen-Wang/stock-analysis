module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    // 反向代理
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      '/api': {
        // 配置跨域
        target: 'https://192.168.0.151:8080', // 转发的域名或 IP，如果 target 为域名，changeOrigin 就需要设置为 true。
        changeOrigin: true, // 转发的域名或 IP，如果 target 为域名，changeOrigin 就需要设置为 true。
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: app => {}
  },
  // 生产环境sourceMap
  productionSourceMap: false,
  // 基本路径，vue.cli 3.3 以前请使用baseUrl
  publicPath: process.env.NODE_ENV === 'production' ? '/stock-analysis/' : './', // stock-analysis和git仓库一个名字
  // 输出文件目录
  outputDir: 'dist',
  // 用于嵌套生成的静态资源（js, css, img, fonts）的目录
  assetsDir: '',
  // webpack配置
  configureWebpack: () => {},
  chainWebpack: () => {},
  // css相关配置
  // css: {
  //     modules: false,// 启用 css modules
  //     extract: true,// 是否使用css分离插件
  //     sourceMap: false,// 开启 css source maps?
  //     loaderOptions: {},// css 预设器配置项
  // },
  // 第三方插件
  pluginOptions: {
    // ...
  }
}
