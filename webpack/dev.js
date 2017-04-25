var webpack = require('webpack');
var config = require("./base.js");
var WebpackDevServer = require('webpack-dev-server');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    quiet: false,
    stats: {
        colors: true
    },
    // hot: true,
    compress: true, //gzip压缩
    publicPath: 'http://localhost:8080/',
    contentBase: '../dist/', //默认情况下，webpack-dev-server会从项目的根目录提供文件，可以通过此选项设置文件的目录名
    historyApiFallback: true, //当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
}).listen(8080);
