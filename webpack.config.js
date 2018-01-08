


module.exports = {
  entry: "src/common/js/_common.js",
  output: {
    path: 'html/common/js',
    filename: 'common.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
        {
          presets: ['es2015','stage-0']
        }
      }
    ]
  }
};
