var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css?$/,
                loaders: [ 'style', 'raw' ],
                include: __dirname
            }
        ]
    }
}
