const path = require('path');
const fs = require('fs');
const app = module.exports = require('express')();



app.get('/:index', (req, res) => {
  const files = fs.readdirSync(path.resolve(__dirname, '../sample_data/'));
  res.sendFile(path.resolve(__dirname, '../sample_data', files[req.params.index%files.length]));
});
