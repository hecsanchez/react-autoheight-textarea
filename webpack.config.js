var path = require("path")

module.exports = {
    entry: "./src/autoheight-textarea",
    output: {
        filename: "index.js",
        path: __dirname,
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    externals: {
        'react': 'react'
    }
}