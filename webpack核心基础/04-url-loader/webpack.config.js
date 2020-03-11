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
            }
        ]
    }
}