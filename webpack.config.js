module.exports = {
    entry: './js/mod-a.js',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
};