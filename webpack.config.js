const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');

const path = require('path');

const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [
		'./src/**/*.html',
        './src/**/*.jsx',
        './src/**/*.tsx',
	],
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

})


module.exports = (env, args) => {
    let production = false;

    if (args && args.mode === 'production') {
        production = true;
        console.log('== Production mode');
    } else {
        console.log('== Development mode');
    }


    return {
        mode: (production)?"production" : "development",
        entry: './src/index.tsx',
        output: {
            filename: '[hash].bundle.js',
            path: __dirname + '/build',
            publicPath: "/BooleanCurse/",
        },
        devtool: production ? false : 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.html', '.txt', '.css'],
        },
        module: {
            rules: [
                {
                    test: /\.(tsx|jsx|ts)?$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    }],
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        ...(production
                            ? [
                                {
                                    loader: MiniCssExtractPlugin.loader,
                                    options: {
                                       
                                    }
                                },
                            ]
                            : [
                                'style-loader'
                            ]),
                        
                  
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: false
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('postcss-import')({
                                        root: loader.resourcePath
                                    }), // Add support for sass-like '@import'
                                    require("postcss-extend")(), // Add support for sass-like '@extend'
                                    require("postcss-nesting")(), // Add support for sass-like nesting of rules
                                    require("tailwindcss"),
     
                                    ...(production
                                        ? [
                                            // If not dev then build with these
                                            purgecss,
                                            require(`postcss-preset-env`)(),
                                            require('cssnano')(),
                                        ]
                                        : []),
                                ],
                            },
                        },
                    ],
                }
            ],
        },
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            contentBase: './build',
            compress: true,
            port: 3030,
            disableHostCheck: true,
            host: '0.0.0.0',
            hot: true,
        },

        plugins: [
            new HtmlWebpackPlugin({ 
                template: './src/index.html',
                cache: false,
                minify: true
            }),
           
            new MiniCssExtractPlugin(),          
            new CopyWebpackPlugin([
                // static files to the site root folder (index and robots)
                {
                    from: './src/static/**/*',
                    to: path.resolve('./build/'),
                    toType: 'dir',
                    flatten: true
                },
            ]),
            ...(production)?[
                new GenerateSW({}), // Don't add brotli files
                new CompressionWebpackPlugin({ // Gzip
                    compressionOptions: {
                        level: 9,
                    },
                    threshold: 1
                }),
                new CompressionWebpackPlugin({ // Brotli
                    filename: '[path].br[query]',
                    algorithm: 'brotliCompress',
                    test: /\.(js|css|html|svg)$/,
                    compressionOptions: {
                        level: 11
                    },
                    threshold: 1,
                    minRatio: 0.9,
                    deleteOriginalAssets: false,
                }),
               
            ] : []
        ]
    }

};