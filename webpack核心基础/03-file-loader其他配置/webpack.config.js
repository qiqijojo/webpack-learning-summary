const path = require('path');
module.exports = {
    devtool: 'cheap-module-eval-source-map', // 开发阶段：'cheap-module-eval-source-map',生产阶段：'cheap-module-source-map'
    mode: 'development', // "production" | "development" | "none
    entry: "./index.js", // string | object | array,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    /**
     * module：告诉webpack如何处理webpack不能够处理的文件
     */
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // 打包后的图片文件名和打包前保持一致
                            outputPath: 'images/', // 作用是将图片统一打包到此文件夹下
                            publicPath: 'http://www.wq.com/' // 指定图片存放在cdn上的域名
                        }
                    }
                ]
            }
        ]
    }
}