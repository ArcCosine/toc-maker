const path = require("path");

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
    }

};

module.exports = config;
