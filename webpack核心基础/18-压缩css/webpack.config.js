const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map', // 开发阶段：'cheap-module-eval-source-map',生产阶段：'cheap-module-source-map'
    mode: 'production', // "production" | "development" | "none
    entry: "./src/js/index.js", // string | object | array,
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
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
     * module：告诉webpack如何处理webpack不能够处理的文件
     */
    module: {
        rules: [
            // 打包iconfont字体图标
            {
                test: /\.(eot|json|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'font/',
                        }
                    }
                ]
            },
            // 打包图片规则
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            /**
                             * limit：指定图片限制的大小
                             * 如果被打包的图片超过了限制的大小，就会将图片保存为一个文件
                             * 如果被打包的图片没有超过限制的大小，就会将图片转换成base64的字符串
                             * 
                             * 注意点：
                             * 对于比较小的图片，我们将图片转换成base64的字符串之后，可以提升网页的性能（因为减少了请求的次数）
                             * 对于比较大的图片，哪怕我们将图片转换成了base64的字符串之后，也不会提升网页的性能，还有可能降低网页的性能（因为图片如果比较大，那么转换之后的字符串也会比较多，那么网页的体积就会变大，那么访问的速度就会变慢）
                             */
                            limit: 1024 * 400, // 1024b = 1kb
                            name: '[name].[ext]', // 打包后的图片文件名和打包前保持一致
                            outputPath: 'images/', // 作用是将图片统一打包到此文件夹下
                        }
                    }
                ]
            },
            // 打包css规则
            {
                test: /\.css$/,
                /**
                 * css-loader：解析css文件中的'@import'依赖关系
                 * style-loader：将webpack处理之后的内容插入到HTML的head代码中
                 * 
                 * loader特点：
                 * (1)单一原则：一个loader只做一件事情
                 * (2)多个loader会按照从右至左，从下至上的顺序执行
                 */
                // use: ['style-loader', 'css-loader'],
                use: [
                    {
                        // loader: 'style-loader'
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true // iconfont需要关掉 modules: false，否则图标加载不出来
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            // 打包less规则
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                        loader: 'less-loader' // compiles Less to CSS
                    }, {
                        loader: 'postcss-loader' // PostCss是一款使用插件去转换css的工具，postcss有很多可以使用的插件，如：autoprefixer（自动补全浏览器前缀）；postcss-pxtorem：自动把px代码转换为rem
                    }
                ]
            },
            // 打包scss规则
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }, {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    /**
     * plugin：告诉webpack需要新增一些什么样的功能
     */
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 指定打包的模板，如果不指定，会自动生成一个空的html
            minify: { // 告诉htmlPlugin打包之后的html文件需要压缩
                // collapseWhitespace: true // 去掉多余空格
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: './doc',
                to: 'doc'
            }
        ]),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}