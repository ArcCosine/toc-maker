const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = {
    entry: {
        "app" :path.join(__dirname, "src/js/loader.js")
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
                test: /\.less$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "less-loader"
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        sourceMap: true,
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
