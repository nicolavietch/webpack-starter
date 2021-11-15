const HtmlWebPack       = require('html-webpack-plugin');
const MiniCssExtract    = require("mini-css-extract-plugin");
const CopyPlugin        = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: { minimize: false}
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ],
            }
        ]
    },
    plugins: [
        new HtmlWebPack({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}
