const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
    entry: {
        "app" : "./src/toc-maker.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : "tocm.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }
        }]
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};

module.exports = config;
