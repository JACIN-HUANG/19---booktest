// module.exports = {
//   configureWebpack: {
//     devtool: 'source-map'
//   },
//   devServer: {
//     proxy: {
//       ///api是后端数据接口的上下文路径
//       '/api': {
//           //这里的地址是后端数据接口的地址
//           target: 'http://localhost:8080/',
//           //允许跨域
//           changeOrigin: true,
//       }
//     }
//   },
//   productionSourceMap: process.env.NODE_ENV === 'production' ? false : true

// }

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//  lintOnSave:false
// })

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
 lintOnSave:false,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 后台接口域名
        ws: true, //如果要代理 websockets，配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
})