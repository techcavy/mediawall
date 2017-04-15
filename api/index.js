const path = require('path');
const fs = require('fs');
const app = module.exports = require('express')();
const config = require('../config.js');

const ls = (dir) => new Promise((resolve, reject) => {
  fs.readdir(dir, (err, list) => {
    if (err) return reject(err);
    resolve(list);
  });
});

app.get('/:index', (req, res) => {
  let files = ls(config.mediaDir)
    .then((files) => {
      let theseFiles = files.filter((file) => {
        if (file[0] === '.') {
          return false;
        }
        if (file.match(/\.(jpe?g|png|svg|gif|bmp)$/i)) {
          return true;
        }
        return false;
      });
      res.sendFile(path.resolve(config.mediaDir, theseFiles[req.params.index%theseFiles.length]));
    })
  .catch((err) => {
    console.log(err);
  });
});
