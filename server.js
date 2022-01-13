const express = require('express');
const readline = require('readline');
const fs = require('fs');
app = express()
const hostname = '127.0.0.1'
app.use(express.urlencoded({ extended: true}));
const port = 1337;
app.set('view engine', 'ejs');





app.get('/', function(req,res){
  res.render('index.ejs',{

  })
})
app.get('/access', function(req, res) {
  res.render('access.ejs', {//list of users and their scores, also used for adding and removing students
  });
});
app.get("/teacher", function(req, res) {
  res.render("teacher.ejs", {

  })
})
app.listen(port, hostname, () => {
  console.log(`Server Running: ${port}`);
});
