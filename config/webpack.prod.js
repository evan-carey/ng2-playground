const helpers = require("./helpers");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const NamedModulesPlugin = require("webpack/lib/NamedModulesPlugin");
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig({ env: ENV }).metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: HMR
});

module.exports = function (options) {
    return webpackMerge(commonConfig({ env: ENV }), {

        devtool: 'source-map',

        output: {
            path: helpers.root('dist'),
            filename: '[name].bundle.js',
            sourceMapFilename: '[name].map',
            chunkFilename: '[id].chunk.js',
            library: 'ac_[name]',
            libraryTarget: 'var'
        },
        module: {
            loaders: [
                test: /\.scss$/,
                use: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            ]
        }
    })
}