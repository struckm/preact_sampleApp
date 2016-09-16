let path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: path.join(__dirname, 'app', 'app.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        },
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: 'build',
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};