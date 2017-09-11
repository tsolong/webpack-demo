var webpack = require('webpack');

module.exports = {
    entry: './js/mod-a.js',
    /*entry: [
        'webpack-dev-server/client?http://localhost:8080',//资源服务器地址
        'webpack/hot/only-dev-server',
        './js/mod-a.js'
    ],*/
    /*entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        './js/mod-a.js'
    ],*/
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [new webpack.BannerPlugin('webpack实例'), new webpack.HotModuleReplacementPlugin()]
};