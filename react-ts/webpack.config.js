module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};
