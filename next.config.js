const package = require('./package.json');

module.exports = {
  env: {
    version: package.version,
  },
}