const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.jsx',
        react: 'react'
    },
    devtool: 'cheap-eval-source-map',
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        modules: [ 'node_modules' ],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /(\.js$)|(\.jsx$)/,
                loader: 'eslint-loader',
                include: [ path.resolve(__dirname, "src") ],
                options: { fix: true },
                enforce: "pre"
            },
            {
                test: /\.woff(2)?(\?)?(\d+)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?)?(\d+)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [ 'css-loader' ]
                })
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?name=images/[name].[ext]'
            },
            {
                test: /\.jsx$/,
                use: ['react-hot-loader', 'babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        compress: true,
        historyApiFallback: true,
        watchContentBase: true,
        noInfo: false,
        stats: 'minimal',
        overlay: {
            warnings: true,
            errors: true
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react',
            filename: 'react.js'
        }),
        new ExtractTextPlugin({ filename: 'style/style.min.css', allChunks: true }),
        new webpack.HotModuleReplacementPlugin()
    ]
};