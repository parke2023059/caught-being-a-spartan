const express = require('express');
const readline = require('readline');
const fs = require('fs');
const path = require('path');
app = express()
const hostname = '127.0.0.1'
app.use(express.urlencoded({ extended: true}));
const port = 1337;


app.set('view engine', 'ejs');



app.get('/', function(req, res) { //view and edit scores
  var rawinfo = fs.readFileSync(__dirname + "/userinfo.json")
  feed = JSON.parse(rawinfo)
  text = feed.text
  res.render('index.ejs', { //depending on perms ^
      text: text
    });
});
app.post('/', function(req, res) {
  const user = req.body.uname
  const pass = req.body.pass
  var login = {
    name: "user",
    password: "pass"
  }
  console.log(login.name)

  if (login.name && login.password) {
    var rawinfo = fs.readFileSync(__dirname + '/userinfo.json')
    feed = JSON.parse(rawinfo)
    console.log(feed)
    text = feed.text
    text.push(login)
    var feed = {
      text: text

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
