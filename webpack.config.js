const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 絶対パス /Users/(ユーザー名)/Lesson/module-bundler-lesson/dist
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: outputPath
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'url-loader',
                options: {
                    limit: 2 * 1024, // 2KiB
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        contentBase: outputPath
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}