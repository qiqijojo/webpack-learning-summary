const path = require('path');

module.exports = {
    devtool: 'none',
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'bundle')
    },
    resolveLoader: {
        // modules: ['node_modules', './loader'], // 下面的loader需要取文件名
        alias: {
            ReplaceLoader: path.resolve(__dirname, 'loader/replace-loader.js'), // 下面的loader取这里重命名的名字
        }
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: [{
                    loader: 'ReplaceLoader', // 取的是文件名 或者 alias重命名的名字
                    options: {
                        name: 'jojo'
                    }
                }]
            }
        ]
    }
}