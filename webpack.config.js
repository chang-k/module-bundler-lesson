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
        rule: [
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    },
    devServer: {
        contentBase: outputPath
    }
}