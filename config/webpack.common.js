const webpack = require("webpack");
const helpers = require("./helpers");

var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const HMR = helpers.hasProcessFlag("hot");
const METADATA = {
    title: "Evan Carey",
    baseUrl: "/",
    isDevServer: helpers.isWebpackDevServers()
};

module.exports = function (options) {
    const isProd = options.env === "production";

    return {

        entry: {
            "main": "./src/main.ts",
            "vendor": "./src/vendor.ts"
        },

        resolve: {
            extensions: [".ts", ".js", ".json"],
            modules: [helpers.root("src"), helpers.root("node_modules")]
        },

        module: {
        
        }


    }
}