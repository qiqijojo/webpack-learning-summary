const path = require('path');

module.exports = {
    devtool: 'none',
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'bundle')
    }
}