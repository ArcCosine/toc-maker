const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

const config = {
    mode: 'production',
    entry: {
        "app" :path.join(__dirname, "src/js/main.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename : "tocm.js"
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "dist",
        port: 8080,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        sourceMap: true,
                        presets: ["@babel/env"]
                    }
                }
            }]
    },
    optimization: {
        minimizer: [new TerserPlugin()]
    }
};

module.exports = config;
