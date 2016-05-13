module.exports = {  
  entry: {
    'app': './src/app.ts'
  },
  output: {
    filename: './out/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { 
        test: /\.ts$/, 
        loader: 'ts-loader' 
      }
    ]
  }
}
