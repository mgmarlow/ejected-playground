var webpackMerge = require('webpack-merge');
var webDev = require('./webpack.config');
var mergeStrategy = {
  customizeObject(a, b, key) {
    if (key === 'entry') {
      return Object.assign({}, a, b);
    }

    return undefined;
  }
};
var webpackPlaygroundMerge = webpackMerge(mergeStrategy);

module.exports = webpackPlaygroundMerge(webDev, {
  "entry": {
    "main": [
      "./src\\main.playground.ts"
    ]
  }
});
