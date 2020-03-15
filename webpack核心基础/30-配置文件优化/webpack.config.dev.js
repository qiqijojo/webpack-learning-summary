const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common.js');

const DevConfig = {
    /*
    watch: true,
    watchOptions: {
        aggregateTimeout: 300, // 防抖，和函数防抖一样，改变过程中不重新打包，只有改变完成 指定时间后 才打包
        poll: 1000, // 每隔多少时间检查一次变动
        ignored: /node_modules/ // 排除一些巨大的文件夹，不需要监控的文件夹
    },
    */
    devServer: {
        contentBase: './bundle', // 配置哪个目录运行在服务器环境下
        open: true,
        port: 9000,
        hot: true, // 开启热更新，只要开启了热更新就不会自动刷新网页了
        hotOnly: true, // 哪怕不支持热更新也不要刷新网页
        // proxy: {
        //     /**
        //      * 以下配置的含义：
        //      * 当我们在代码中发送请求到/user的时候，devServer就会自动将我们请求的地址替换为：
        //      * http://127.0.0.1:3000/user
        //      **/
        //     '/user': {
        //         target: 'http://127.0.0.1:3000',
        //         changeOrigin: true, // 域名跨域
        //         secure: false, // https跨域 
        //     },
        //     '/login': {
        //         target: 'http://127.0.0.1:3000',
        //         changeOrigin: true, // 域名跨域
        //         secure: false, // https跨域 
        //     }
        // }
        proxy: [{
            context: ['/user', '/login'],
            target: 'http://127.0.0.1:3000',
            changeOrigin: true, // 域名跨域
            secure: false, // https跨域
            pathRewrite: { // 路径重写，将路径中的api替换为空（我理解的是将/api添加在/user之前，来符合服务端的接口）
                '': '/api'
            }
        }]
        /**
         * 注意点：
         * devServer只能解决开发阶段的跨域问题，并不能解决项目上线之后的跨域问题
         * 原因非常简单，因为项目上线之后是将打包好的文件上传到服务器，而打包好的文件中并没有devServer
         */
    },
    devtool: 'cheap-module-eval-source-map', // 开发阶段：'cheap-module-eval-source-map',生产阶段：'cheap-module-source-map'
    mode: 'development', // "production" | "development" | "none
    /**
     * plugin：告诉webpack需要新增一些什么样的功能
     */
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 指定打包的模板，如果不指定，会自动生成一个空的html
        }),
        new Webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = Merge(CommonConfig, DevConfig);