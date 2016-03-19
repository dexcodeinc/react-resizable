module.exports = {
    context: __dirname,
    entry: [
      "./lib/index.js",
    ],
    output: {
      filename: 'dist/react-resizable.js',
      sourceMapFilename: "[file].map",
      libraryTarget: 'umd',
      library: 'ReactResizable'
    },
    externals: {
      'react': {
        'commonjs': 'react',
        'commonjs2': 'react',
        'amd': 'react',
        // React dep should be available as window.React, not window.react
        'root': 'React'
      },
      'react-dom': {
        'commonjs': 'react-dom',
        'commonjs2': 'react-dom',
        'amd': 'react-dom',
        'root': 'ReactDOM'
      }
    },
    module: {
      loaders: [
        {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory=true'},
      ]
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
};
