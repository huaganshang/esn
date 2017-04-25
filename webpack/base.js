const path = require('path');
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const px2rem = require('postcss-px2rem');

const APP_PATH = path.resolve(__dirname, '../');
const APP_SRC = path.join(APP_PATH, '/src');
const APP_DIST = path.join(APP_PATH, '/dist');

module.exports = {
    devtool: '#eval-source-map',
    entry: {
        app: [path.join(APP_SRC, "/main.js")],
        vendors: [
            'vue',
            'vuex',
            'vue-router',
            'axios',
        ],
    },
    output: {
        // publicPath: './',
        path: APP_DIST,
        filename: '[name].[hash].js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            src: APP_SRC,
            YY_component: 'src/component',
            YY_view: 'src/view',
        },
        extensions: ['.js', '.json', '.vue', '.scss', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=1000&name=img/[name]-[hash].[ext]',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
            },
            {
                test: /\.js$/,
                include: APP_SRC,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {
                                modules: false
                            }]
                        ]
                    }
                }]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: 'vendor.[hash].js',
        }),
        new htmlWebpackPlugin({
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
            favicon: path.join(APP_SRC, '/asset/ico.ico'),
            template: path.join(APP_SRC, '/template/index.html'),
        }),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [autoprefixer({
                        browsers: [
                            "> 1%",
                            "last 2 versions",
                            "not ie <= 8"
                        ]
                    }), px2rem({remUnit: 75})];
                },
            }
        }),
    ],
};
