const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

const settings = {
    name: 'Harmony',
    devServerUrl: 'http://localhost:8080',
    jsEntry: {
        'grid-tools': './src/grid-tools',
        'demo-index': './demoSrc/index.scss',
    },
    destination: path.resolve(__dirname),
    demoSrc: path.resolve(__dirname, 'demoSrc'),
};

// Configure the twig loader
const configureTwigLoader = () => {
    return {
        test: /\.twig$/,
        loader: 'twig-loader',
        options: {
            debug: true,
            // Twig options - eg: autoescape: true
            // https://twig.symfony.com/doc/2.x/api.html
        },
    };
};

// Configure Babel loader
const configureBabelLoader = () => {
    return {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            modules: false,
                            useBuiltIns: 'usage',
                            corejs: '3.0.1',
                        },
                    ],
                ],
            },
        },
    };
};

// Configure Babel loader
const configureHtmlLoader = () => {
    return {
        test: /\.html$/,
        loader: require.resolve('file-loader'),
        options: {
            name: '[name].[ext]',
        },
    };
};

// Configure the stylesheet loader
const configureStylesheetLoader = isProduction => {
    return isProduction
        ? {
              test: /\.(sa|sc|c)ss$/,
              use: [
                  MiniCssExtractPlugin.loader, // 4. Convert the JS to a CSS file
                  {
                      loader: 'css-loader', // 3. Convert CSS to JS object
                      options: {
                          importLoaders: 2,
                          sourceMap: true,
                      },
                  },
                  {
                      loader: 'postcss-loader', // 2. Run CSS through PostCss
                      options: {
                          sourceMap: true,
                      },
                  },
                  'sass-loader', // 1. Convert SCSS to CSS
              ],
          }
        : {
              test: /\.(sa|sc|c)ss$/,
              use: [
                  'style-loader', // 4. Insert hot CSS into the page
                  'css-loader', // 3. Convert CSS to JS object
                  {
                      loader: 'postcss-loader', // 2. Run CSS through PostCss
                      options: {
                          plugins: [require('autoprefixer')],
                      },
                  },
                  'sass-loader', // 1. Convert SCSS to CSS
              ],
          };
};

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    return {
        entry: settings.jsEntry,
        output: {
            path: settings.destination,
            libraryTarget: 'umd',
            library: 'lib',
            umdNamedDefine: true,
            globalObject: `(typeof self !== 'undefined' ? self : this)`,
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        map: {
                            inline: false,
                            annotation: true,
                        },
                        safe: true,
                        discardComments: true,
                    },
                }),
            ],
        },
        devServer: {
            public: settings.devServerUrl,
            contentBase: path.resolve(__dirname, settings.demoSrc),
            quiet: true,
            stats: 'errors-only',
            host: '0.0.0.0',
            disableHostCheck: true,
        },
        module: {
            rules: [
                configureHtmlLoader(),
                configureTwigLoader(),
                configureBabelLoader(),
                configureStylesheetLoader(isProduction),
            ],
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [
                    path.resolve(__dirname, 'demoBuilt'),
                ],
                verbose: false, // disable logging
                root: path.resolve(__dirname, '/'),
            }),
            new FriendlyErrorsWebpackPlugin({
                compilationSuccessInfo: {
                    messages: [
                        `The ${settings.name} demo is running at: ${settings.devServerUrl}`,
                    ],
                },
                onErrors: (severity, errors) => {
                    if (severity !== 'error') return;
                    const error = errors[0];
                    console.log(error.message);
                },
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(
                    __dirname,
                    settings.demoSrc,
                    `./index.twig`
                ),
            }),
            new HtmlWebpackPlugin({
                filename: 'introduction.html',
                template: path.resolve(
                    __dirname,
                    settings.demoSrc,
                    `./introduction.twig`
                ),
            }),
            new HtmlBeautifyPlugin(),
            isProduction
                ? new MiniCssExtractPlugin({
                      filename: '[name].css',
                  })
                : () => {},
        ],
    };
};
