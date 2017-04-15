const fs = require('fs');
const path = require('path');
const ospath = require('ospath');
const pkg = require('./package.json');

let config = {
  name: 'mediawall',
  version: pkg.version,
  mediaDir: path.resolve(__dirname, './sample_data'),
};

config.settingsDir = path.join(ospath.data(), config.name);

module.exports = config;
