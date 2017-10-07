const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        publicPath: './',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' }
                ]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            [
                                'es2015',
                                { "modules": false }
                            ]
                        ]
                    }
                }],
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            objectAssign: 'Object.assign'
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'stylus-loader' }
                ]
            }
        ]
    },
    resolve: {
        alias: { vue: 'vue/dist/vue.js' }
    }
}
