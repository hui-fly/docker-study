const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    mode:"development",
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                  loader:'babel-loader',
                  options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "corejs": 3
                                }
                            ]
                        ]
                    }
                },
                exclude: /node_modules/ //排除 node_modules 目录
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: [require('autoprefixer')]
                    //     }
                    // }
                ],
                exclude: /node_modules/
            }
        ]
    },
    devServer:{
        port: '3000', //默认是8080
        quiet: false, //默认不启用
        inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
        stats: "errors-only", //终端仅打印 error
        overlay: false, //默认不启用
        clientLogLevel: "silent", //日志等级
        compress: true //是否启用 gzip 压缩
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',// 源html文件
            filename: 'index.html', //打包后的文件名
            chunks:['index'],
            hash: true //是否加上hash，默认是 false
        }),
        new HtmlWebpackPlugin({
            template: './public/login.html',// 源html文件
            filename: 'login.html', //打包后的文件名
            chunks:['login'],
            hash: true //是否加上hash，默认是 false
        })
    ]
}