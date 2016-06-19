var path = require('path');
 
module.exports = {
    entry: {
        userManager: "./Scripts/Import/userManager.js",
        defaultLib: "./Scripts/Import/defaultManager.js"
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: './Bundle/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
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