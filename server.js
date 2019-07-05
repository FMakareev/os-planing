/* global process */
var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.resolve(process.cwd() + '/build')));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(process.cwd() + '/build/index.html'));
});

app.listen(process.env.NODE_PORT || 3000, () => {
  console.log(`Server is listening on port:${process.env.NODE_PORT || 3000}. !!!!!!!!`);
});
