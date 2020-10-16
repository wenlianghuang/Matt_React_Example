const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.min.js'
    },

    module: {
        rules:
        [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                {
                  loader: "html-loader"
                }
                ]
            },
            {
                test: /\.css$/, // 正則式，$ 用以表示以 .css 結尾的檔案，反斜線是跳脫字元
                use: ["style-loader", "css-loader"]
            }

        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin()
    ]
}