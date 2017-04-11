const path = require('path');
const fs = require('fs');
const app = module.exports = require('express')();



app.get('/:index', (req, res) => {
  let files = fs.readdirSync(path.resolve(__dirname, '../sample_data/'));
  files = files.filter((file) => {
    if (file[0] === '.') {
      return false;
    }
    if (file.match(/\.(jpe?g|png|svg|gif|bmp)$/i)) {
      return true;
    }
    return false;
  })
  res.sendFile(path.resolve(__dirname, '../sample_data', files[req.params.index%files.length]));
});
