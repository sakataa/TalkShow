var path = require('path');
 
module.exports = {
    entry: {
        BlockScope: "./Scripts/BlockScope/blockscope.js",
        UserManager: "./Scripts/Module/userManager.js"
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: './Bundle/[name]/[name].js'
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