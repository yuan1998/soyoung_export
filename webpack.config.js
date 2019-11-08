const path                           = require('path');
const UglifyWebpackPlugin            = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin           = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin }         = require('clean-webpack-plugin');
const { VueLoaderPlugin }            = require("vue-loader");

module.exports = {
    entry       : path.resolve(__dirname, 'src/index.js'),
    output      : {
        path      : path.resolve(__dirname, 'soyoungExport'),
        filename  : 'bundle.js',
        publicPath: '/'
    },
    devServer   : {
        contentBase: './dist',
        port       : '8080',
        host       : 'localhost'
    },
    module      : {
        rules: [
            {
                test   : /\.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/
            },
            {
                test   : /\.css/,
                use    : [ { loader: MiniCssExtractPlugin.loader }, 'css-loader' ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test   : /\.less/,
                use    : [ { loader: MiniCssExtractPlugin.loader }, 'css-loader', 'less-loader' ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test   : /\.vue$/,
                loader : 'vue-loader',
                options: {
                    loaders: {
                        'less': [
                            'vue-style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    }
                }
            },
        ]
    },
    externals   : {
        'qs'        : 'Qs',
        'jquery'    : 'jQuery',
        'vue'       : 'Vue',
        'moment'    : 'moment',
        'exceljs'   : 'ExcelJS',
        'axios'     : 'Axios',
        'element-ui': 'ELEMENT',
        'hotkeys-js': 'hotkeys',
    },
    resolve     : {
        //引入路径是不用写对应的后缀名
        extensions: [ '.js', '.vue' ],
        //缩写扩展
        alias     : {
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$': 'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
            //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
            '@'   : path.resolve(__dirname, './src'),
        }
    },
    optimization: {
        minimizer: [
            new UglifyWebpackPlugin({
                parallel: 4
            }),
            new OptimizeCssAssetsWebpackPlugin()
        ]
    },
    plugins     : [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}
