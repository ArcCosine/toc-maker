const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
    mode: "production",
    entry: {
        app: "./src/js/main.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "tocm.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/html/index.html",
                    to: "index.html",
                },
                {
                    from: "src/html/debug.html",
                    to: "debug.html",
                },
            ],
        }),
    ],
};

module.exports = config;
