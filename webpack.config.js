var path = require('path');
var webpack = require('webpack');
// var WebpackMd5Hash = require('webpack-md5-hash');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/', // html中嵌入的script的src的路径
        publicPath: './', // html中嵌入的script的src的路径
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {}
                // other vue-loader options go here
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true, // 不跳转
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        // 生产环境时  清除console的警告
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // 更科学的hash
        // new WebpackMd5Hash(),
        // 在文件开头插入banner
        new webpack.BannerPlugin('The file is creted by Leo.--' + new Date()),
        // 根据Js的hash，对应更改html
        new HtmlWebpackPlugin({
            filename: './index.html', // 路径 === output.path,生成index.html
            template: path.resolve(__dirname, './index.html'), // 模板的路径 跟webpack.config一个目录
            hash: true, // 如果output文件没定义，这个则会在引用文件后面用xxx.js?ssadasdasd形式
            inject: true, //true: js资源被注入到body元素的底部  head:js资源被注入到head元素的底部
            minify: { // 压缩HTML文件
                // removeComments: true, // 移除HTML中的注释
                // collapseWhitespace: true // 删除空白符与换行符
            }
        })
    ])
}
