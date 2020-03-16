const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common.js');

const ProdConfig = {
    devtool: 'cheap-module-source-map', // 开发阶段：'cheap-module-eval-source-map',生产阶段：'cheap-module-source-map'
    mode: 'production', // "production" | "development" | "none
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
            template: './src/index.html', // 指定打包的模板，如果不指定，会自动生成一个空的html
            minify: { // 告诉htmlPlugin打包之后的html文件需要压缩
                collapseWhitespace: true // 去掉多余空格
            }
        })
    ]
};
module.exports = Merge(CommonConfig, ProdConfig);