const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const project = require('./project.config');

module.exports = {
    entry: {
        main: NODE_ENV === 'development' ? ['webpack-dev-server/client?http://0.0.0.0:8080/', 'webpack/hot/only-dev-server', './src/index.jsx'] : './src/index',
        react: [ 'react' ]
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : false,
    output: {
        path: NODE_ENV === 'development' ? path.join(__dirname, 'dist') : project.localPath,
        publicPath: '/',
        filename: 'bundle.js',
        library: '[name]'
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
                loader: ExtractTextPlugin.extract("css-loader")
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?name=images/[name].[ext]'
            },
            {
                test: /\.jsx$/,
                loaders: ['react-hot-loader', 'babel-loader'],
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
        host: '0.0.0.0',
        port: 8080,
        contentBase: './dist',
        hot: true
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
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
