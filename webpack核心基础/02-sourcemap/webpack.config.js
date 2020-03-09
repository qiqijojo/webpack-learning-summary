const path = require('path');
module.exports = {
    /**
     * cheap - 只提示行
     * module - 不仅支持本地代码的映射，也支持第三方代码的映射
     * eval - 不会生成单独sourcemap映射文件，提高性能（对开发环境而言）
     * 生产环境不用eval是因为可以生成单独的sourcemap映射文件，不增加打包文件的体积,不执行bundle.js.map文件，用户访问页面只加载bundle.js这个文件即可，减少请求，提高性能
     */
    devtool: 'cheap-module-eval-source-map', // 开发阶段：'cheap-module-eval-source-map',生产阶段：'cheap-module-source-map'
    mode: 'development', // "production" | "development" | "none
    entry: "./index.js", // string | object | array,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
}