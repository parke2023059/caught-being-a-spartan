const express = require('express');
app = express()
const hostname = '127.0.0.1'
const port = 1337;




app.set('view engine', 'ejs');


app.get('/', function(req, res) { //view and edit scores
  res.render('index.ejs', { //depending on perms ^
  });
});

app.get('/access', function(req, res) {
  res.render('access.ejs', {//list of users and their scores, also used for adding and removing students
  });
});



app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
