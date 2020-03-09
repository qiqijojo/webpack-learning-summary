const path = require('path');
module.exports = {
    /**
     * mode: 指定打包的模式，模式有两种
     * （1）开发模式（development）：不会对打包的js代码进行压缩
     * （2）上线/生产模式（production）：会对打包的js代码进行压缩
     */
    mode: 'development', // "production" | "development" | "none"
    /**
     * entry：指定需要打包的文件
     */
    entry: "./index.js", // string | object | array,
    /**
     * output：打包之后的文件 输出的路径 和 输出的文件名称
     */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
}