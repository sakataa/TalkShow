 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
         basic: './import/importing.js',
         defaultImporting: './import/default-importing.js',
         exporting_anotherfile: './import/importing-anotherfile.js'
         //circular_module_dependency: './import/circular-module-dependency.js'
     },
     output: {
         path: path.resolve(__dirname, './'),
         filename: './build/[name].page.js'
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