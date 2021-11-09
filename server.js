const express = require('express');
app = express()
const hostname = '127.0.0.1'
const port = 8080;

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index.ejs', {
  });
});

app.get('/student', function(req, res) {
  res.render('student.ejs', {
  });
});

app.get('/teacher', function(req, res) {
  res.render('teacher.ejs', {
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
