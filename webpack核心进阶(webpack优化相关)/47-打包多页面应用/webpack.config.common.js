const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const fs = require('fs');
const HappyPack = require('happypack');

const plugins = [
    new HtmlWebpackPlugin({
        // 指定打包的模板，如果不指定，会自动生成一个空的html
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['index', 'vendors~index'] // 告诉webpack插入以index、vendors～index开头的文件
    }),
    new HtmlWebpackPlugin({
        // 指定打包的模板，如果不指定，会自动生成一个空的html
        template: './src/index.html',
        filename: 'detail.html',
        chunks: ['detail', 'vendors~detail']
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
        {
            from: './doc',
            to: 'doc'
        }
    ]),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
    }),
    /**
     * 以下代码的含义：
     * 在打包moment这个库的时候，将整个local目录都忽略掉
     */
    new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HappyPack({
        id: 'js',
        use: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    "presets": [["@babel/preset-env", {
                        targets: {
                            // "chrome": "14"
                        },
                        // useBuiltIns: 'usage' // 只转换使用到的ES6语法
                    }]],
                    "plugins": [
                        ["@babel/plugin-proposal-class-properties", { "loose": true }],
                        [
                            "@babel/plugin-transform-runtime",
                            {
                                "absoluteRuntime": false,
                                "corejs": 2, // 目的不让污染全局环境，需要再安装这个corejs包
                                "helpers": true,
                                "regenerator": true,
                                "useESModules": false
                            }
                        ]
                    ]
                }
            }
        ]
    })
];
const dllPath = path.resolve(__dirname, 'dll');
const files = fs.readdirSync(dllPath);
files.forEach((file) => {
    if (file.endsWith('.js')) {
        plugins.push(new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, 'dll', file)
        }))
    } else if (file.endsWith('.json')) {
        plugins.push(new Webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dll', file)
        }))
    }
})
module.exports = {
    /**
     * 告诉webpack需要对代码进行分割
     */
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    /**
     * entry: 指定需要打包的文件
     */
    entry: {
        index: "./src/js/index.js",
        detail: "./src/js/detail.js"
    },
    /**
     * output: 指定打包之后的文件输出的路径和输出的文件名称
     */
    output: {
        /**
         * filename: 指定打包之后的JS文件的名称
         */
        filename: 'js/[name].[contenthash:8].js',
        /**
         * path: 指定打包之后的文件存储到什么地方
         */
        path: path.resolve(__dirname, 'bundle')
    },  
    /**
     * module：告诉webpack如何处理webpack不能够处理的文件
     */
    module: {
        noParse: /jquery/,
        rules: [
            // 检查编码规范的规则
            {
                // enforce: "pre"的作用：让当前的loader在其他loader之前执行
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                loader: 'eslint-loader',
                options: {
                    // eslint options (if necessary)
                    fix: true
                },
            },
            // 打包JS规则
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader",
            //     options: {
            //         "presets": [["@babel/preset-env", {
            //             targets: {
            //                 // "chrome": "14"
            //             },
            //             // useBuiltIns: 'usage' // 只转换使用到的ES6语法
            //         }]],
            //         "plugins": [
            //             ["@babel/plugin-proposal-class-properties", { "loose": true }],
            //             [
            //                 "@babel/plugin-transform-runtime",
            //                 {
            //                     "absoluteRuntime": false,
            //                     "corejs": 2, // 目的不让污染全局环境，需要再安装这个corejs包
            //                     "helpers": true,
            //                     "regenerator": true,
            //                     "useESModules": false
            //                 }
            //             ]
            //         ]
            //     }
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'happypack/loader?id=js'
            },
            // 打包iconfont字体图标规则
            {
                test: /\.(eot|json|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash:8].[ext]',
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
                            name: '[name].[contenthash:8].[ext]', // 打包后的图片文件名和打包前保持一致
                            outputPath: 'images/', // 作用是将图片统一打包到此文件夹下
                            esModule: false, // 该配置项为图片打包后的默认路径，带default对象，默认为ture，在配置项里将此项改为false即可去掉多余的defalut对象
                            publicPath: 'http://127.0.0.1:9000/images'
                        }
                    }
                ]
            },
            // 打包html中的图片规则
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
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
                use: [
                    {
                        // loader: 'style-loader'
                        loader: MiniCssExtractPlugin.loader,
                        options: { // 若使用这个MiniCssExtractPlugin.loader进行css编译，则需要添加并开启options中的hmr：true，否则css代码改动页面不会更新
                            hmr: true
                        }
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
    plugins: plugins,
    resolve: {
        // // 创建 import 或 require 的别名，来确保模块引入变得更简单
        // alias: {
        //     'bootstrapcss': 'bootstrap/dist/css/bootstrap.css'
        // },
        // // 指定模块入口的查找顺序（在package.json中）
        // mainFields: ['style', 'main'],

        // // 指定导入模块的查找顺序（根据扩展名）
        // extensions: ['.css', '.js', 'json']
    }
}