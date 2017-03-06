var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//var ModernizrPlugin = require('modernizr-webpack-plugin');

/**
var modernizrConfig = {
  "filename": "modernizr.js",
  'options': [
    'setClasses',
    'html5printshiv'
  ],
  'feature-detects': [
    "inputtypes",
    "network/connection",
    "touchevents"
  ],
  "minify" : {
    "output": {
      "comments": false,
      "beautify": false,
      "screw_ie8": true
    }
  }
}
*/


var stripLogger = 'strip-loader?strip[]=console.error' +
                              '&strip[]=console.log' +
                              '&strip[]=console.warn'


module.exports = {
  // The base directory for resolving the entry option
  context: __dirname,

  entry: {
    app: 'index',
    vendor: ['react', 'react-dom'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "{{PKG_NAME}}.js",
    pathinfo: true
  },
  /*
  output: {
          path: path.join(__dirname, "dist"),
          filename: "[chunkhash].js",
          chunkFilename: "[chunkhash].js"
      },
   */

  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
    moduleExtensions: ["-loader"],
  },

  resolve: {
    // Directories that contain our modules
    modules: [path.resolve(__dirname, "lib"), "node_modules"],
    descriptionFiles: ["package.json"],
    moduleExtensions: ["-loader"],
    // Extensions used to resolve modules
    extensions: ['.js', '.react.js', '.scss', '.css']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?minifier!group-css-media-queries!sass'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: ['file']
      },
      {
        test: /\.js$/,
        use: ['babel', stripLogger],
        exclude: [/node_modules/]
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
    /*
    new ModernizrPlugin(modernizrConfig),
    */
    /*
    new webpack.optimize.AggressiveSplittingPlugin({
                minSize: 30000,
                maxSize: 50000
    }),
    */
    new webpack.optimize.CommonsChunkPlugin({names: ["vendor"],
                                             filename: "vendor.js"}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin('{{PKG_NAME}}.css')
  ],

  // Include mocks for when node.js specific modules may be required
  node: {
    fs: 'empty',
    vm: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
