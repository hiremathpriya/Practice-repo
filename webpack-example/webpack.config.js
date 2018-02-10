module.exports = {
    entry: ["./global.js", "./app.js"],
    output: {
      filename: "bundle.js"
    },
    devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:3000',
              secure: false
          }
      }
    },
    module: {
      loaders: [
        {
          test: /\.es6$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'] 
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.es6']
    },
  }