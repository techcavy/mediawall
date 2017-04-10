const app = module.exports = require('express')();

app.get('/', (req, res) => {
  res.json({success:true});
});
