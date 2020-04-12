const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: distDir
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};