const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin')

// Add an entry as the starting point where webpack will begin to build our dependency tree from
module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    module: {
        rules: [ // We're using a rule in webpack, which goes under an array of rules
            {
                test: '/\.js$/', // We use regex to isolate the type of file that we're going to run this loader on. So in this case, we're looking for anything that ends in .js and it needs to be run through this particular loader.
                exclude: /node_modules/, // We're excluding it from this directory so it doesn't run through all of our node files
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html", // We're telling it to look at the HTML file in client views
            filename: "./index.html", // and to have it generate a new index HTML file for us in the dist folder
        })
    ]
};