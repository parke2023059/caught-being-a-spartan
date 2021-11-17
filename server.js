const express = require('express');
const readline = require('readline');
const fs = require('fs');
app = express()
const hostname = '127.0.0.1'
app.use(express.urlencoded({ extended: true}));
const port = 1337;


app.set('view engine', 'ejs');

var rawdata = fs.readFileSync(__dirname + '/userinfo.json');


app.get('/', function(req, res) { //view and edit scores
  var rawinfo = fs.readFileSync(__dirname + "/userinfo.json")
  feed = JSON.parse(rawinfo)
  res.render('index.ejs', { //depending on perms ^
    username:uName,
    password: passw
  });
});

app.post('/', function(req, res) {
  const user = req.body.Uname
  const pass = req.body.Pass
  var login = {
    uName: user,
    passw: pass
  }

  if (login.username && login.password) {
    var rawinfo = fs.readFileSync('./userinfo')
    feed = JSON.parse(rawinfo)
    console.log(feed)
    comments = feed.comments
    comments.push(login)
    var feed = {
      comments: comments
    }
    var feed = JSON.stringify(feed)

    fs.writeFile(__dirname + '/userinfo.json', feed, 'utf8', function() {
      console.log('wrote to file')
      console.log(feed)
    })
  }
})

app.get('/access', function(req, res) {
  res.render('access.ejs', {//list of users and their scores, also used for adding and removing students
  });
});

app.get("/teacher", function(req, res) {
  res.render("teacher.ejs", {

  })
})


app.post('/access', function(req, res) {
  res.render('access.ejs', {
  });
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
