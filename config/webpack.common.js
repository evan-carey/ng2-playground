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
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
    const isProd = options.env === "production";

    return {

        entry: {
            "polyfills": "./src/polyfills.ts",
            "vendor": "./src/vendor.ts",
            "app": "./src/app.ts",
        },

        resolve: {
            extensions: [".ts", ".js", ".json"],
            modules: [helpers.root("src"), helpers.root("node_modules")]
        },

        module: {
            rules: [

                /**
                 * TypeScript
                 */
                {
                    test: /\.ts$/,
                    use: [
                        'awesome-typescript-loader',
                        'angular2-template-loader',
                        'angular2-router-loader'
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },

                /**
                 * JSON
                 */
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },


            ]
        }


    }
}