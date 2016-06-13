var path = require('path');
 
module.exports = {
    entry: {
        BlockScope: "./Scripts/BlockScope/blockscope.js",
        UserManager: ["babel-polyfill", "./Scripts/Module/userManager.js"],
        Collection: ["babel-polyfill", "./Scripts/Collection/collection.js"],
        Promise: ["babel-polyfill", "./Scripts/Promise/promise.js"]
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: './Bundle/[name]/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};