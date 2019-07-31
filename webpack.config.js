const path = require('path');

module.exports = {
  entry: './js/test_call.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
