const path = require('path');

module.exports = {
  entry: {
    javascript: "./src/index.js",
    html: './src/index.html',
  }, // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  mode: 'development',
  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "[name].js", // string
    // the filename template for entry chunks

    publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page

    /* Advanced output configuration (click to show) */
  },

  module: {
    // configuration regarding
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader/webpack", "babel-loader"],
      },

      {
        test: /\.html$/,

        use: [
          // apply multiple loaders and options
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      },
      // matches if the condition is not matched
    ],

    /* Advanced module configuration (click to show) */
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname)
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css", ".html"],
    // extensions that are used
    /* alternative alias syntax (click to show) */

    /* Advanced resolve configuration (click to show) */
  },

  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  // the environment in which the bundle should
  // Don't follow/bundle these modules, but request them at runtime from the environment

  // lets you precisely control what bundle information gets displayed

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'src'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },
  // list of additional plugins


  /* Advanced configuration (click to show) */
}
