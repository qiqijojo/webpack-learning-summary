const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common.js');
const PurifyCSSPlugin = require("purifycss-webpack");
const glob = require("glob-all");

const ProdConfig = {
    /**
     * 配置sourcemap：
     * 开发阶段：'cheap-module-eval-source-map'
     * 生产阶段：'cheap-module-source-map'
     */
    devtool: 'cheap-module-source-map',
    /**
     * mode：指定打包的模式，模式有两种
     * 一种是开发模式(development): 不会对打包的JS代码进行压缩
     * 还有一种就是上线(生产)模式(production): 会对打包的JS代码进行压缩
     */
    mode: 'production', // "production" | "development"
    /**
     * optimization: 配置webpack的优化项
     */
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    /**
     * plugin：告诉webpack需要新增一些什么样的功能
     */
    plugins: [
        new HtmlWebpackPlugin({
            // 指定打包的模板，如果不指定，会自动生成一个空的html
            template: './src/index.html',
            // 告诉htmlPlugin打包之后的html文件需要压缩
            minify: {
                // 去掉多余空格
                collapseWhitespace: true
            }
        }),
        new PurifyCSSPlugin({
            // 告诉PurifyCSSPlugin需要过滤哪些文件
            paths: glob.sync([
                path.join(__dirname, 'src/*.html'),
                path.join(__dirname, 'src/js/*.js')
            ])
        })
    ]
};
module.exports = Merge(CommonConfig, ProdConfig);