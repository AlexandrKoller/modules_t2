const htmlWebpuckPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                miniCssExtractPlugin.loader,
                "css-loader"
            ]
        },
        ]
    },
    plugins: [
        new htmlWebpuckPlugin(
            {template: './src/index.html'}
        ), 
        new miniCssExtractPlugin()

    ]
}
