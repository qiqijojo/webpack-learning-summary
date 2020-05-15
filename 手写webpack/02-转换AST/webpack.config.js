const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'bundle')
    },
    module: {
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ]
}