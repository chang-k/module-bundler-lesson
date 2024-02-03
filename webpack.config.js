const path = require('path')

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
            }
        ]
    },
    devServer: {
        contentBase: outputPath
    }
}