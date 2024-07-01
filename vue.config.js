// cnpm i image-webpack-loader@8.1.0 --save-dev           图片压缩，不需要引入
// cnpm install compression-webpack-plugin@6.1.1 -D       gzip压缩插件，需要引入
// cnpm i uglifyjs-webpack-plugin@2.2.0 -D                js代码压缩，以及清楚console插件
// npm i webpack-bundle-analyzer@4.7.0 --save-dev   || 结合 npm run build -report 使用

const CompressionWebpackPlugin = require('compression-webpack-plugin') // 开启gzip压缩， 按需引用
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 压缩代码，去掉注释
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 引入打包分析插件

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i // 开启gzip压缩， 按需写入
const isProduction = process.env.NODE_ENV !== 'development'
const BASE_URL = process.env.NODE_ENV === 'development' ? '/vue2/' : '/vue2/'
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 其他配置可以走默认
  publicPath: BASE_URL, // 基本路径
  outputDir: 'docs', // 输出文件目录
  lintOnSave: true, // 是否在开发环境下每次保存代码时都启用 eslint验证。
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // assetsDir: '',  // 静态文件要不要放在一个文件夹里，默认值是‘’，有需要可以自己改

  // webpack配置
  chainWebpack: config => {
    if (isProduction) {
      // 删除预加载
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      // 压缩图片
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })
        .end()
    }
    // 添加text-loader
    config.module.rule('text').test(/\.md$/).use('text-loader').loader('text-loader')
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src')) // 设置@快捷到src目录
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
  configureWebpack: config => {
    if (isProduction) {
      // 打包可视化分析
      // config.plugins.push(new BundleAnalyzerPlugin())
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
      // 优化打包chunk-vendors.js文件体积过大。
      // 利用splitChunks将每个依赖包打包成单独的js文件，在生产环境下配置，
      const optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit（2.4kb）将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      }
      Object.assign(config, {
        optimization
      })
      // js代码 压缩
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            // UglifyJS 压缩选项。
            compress: {
              drop_debugger: true,
              drop_console: true, // 生产环境自动删除console
              pure_funcs: ['console.log'] // 移除console
            },
            warnings: false
          },
          parallel: true // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      )
      // 开启 gzip 压缩 文件（跟 js代码压缩UglifyJsPlugin不一样）
      // 注：生成的压缩文件以.gz为后缀，一般浏览器都已支持.gz的资源文件，在http请求的Request Headers 中能看到 Accept-Encoding:gzip。要使服务器返回.gz文件，还需要对服务器进行配置，根据Request Headers的Accept-Encoding标签进行鉴别，如果支持gzip就返回.gz文件。
      // 服务器配置参考：https://blog.csdn.net/a1983029606/article/details/115690820
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240, // 只有大小大于该值的资源会被处理
          minRatio: 0.8 // 只有压缩率小于这个值的资源才会被处理
        })
      )
    }

    // 复制拷贝文件
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: 'src/views',
          to: 'views',
          toType: 'dir'
        }
      ])
    )
    // 添加jquery的支持
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    )
  },

  // css相关配置
  css: {
    loaderOptions: {
      // 启用less中javascript支持
      less: {
        // less-lorder配置项 详见 https://www.webpackjs.com/loaders/less-loader/#lessoptions
        javascriptEnabled: true
      }
    }
  },

  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  // parallel: require('os').cpus().length > 1,

  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0', // ip 本地
    port: 2023, // 设置端口号
    // inline: true, // 用于设置代码保存时是否自动刷新页面。默认：true
    // open: false, //配置自动启动浏览器，默认：false
    // hot: true, // 用于设置代码保存时是否进行热更新（局部刷新，不刷新整个页面）。默认：true
    // https: false, // 用于设置是否启用https，默认：false
    proxy: {
      // 设置代理
      '/api': {
        // 代理名称   凡是使用/api开头的地址都是用此代理
        target: 'http://1.2.3.4:5000/', // 需要代理访问的api地址
        changeOrigin: true // 允许跨域请求
        // pathRewrite: {
        //   // 重写路径，替换请求地址中的指定路径
        //   '^/api': '/' // 将请求地址中的/api替换为空，也就是请求地址中不会包含/api/
        // }
      },
      '/GisQMobileRest': {
        target: 'http://www.gaomi.gov.cn/ddydyzt',
        changeOrigin: true
      },
      // shinegis admin 1.x
      '/clientadmin': {
        target: 'http://www.gaomi.gov.cn/ddydyzt',
        changeOrigin: true
      },
      // 中台登录
      '/auth': {
        target: 'http://www.gaomi.gov.cn/ddydyzt',
        changeOrigin: true
      },
      // 中台接口
      '/identity': {
        target: 'http://www.gaomi.gov.cn/ddydyzt',
        changeOrigin: true
      },
      // 中台接口
      '/qyzznew': {
        target: 'http://192.168.11.202:8080',
        changeOrigin: true
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {}
}
