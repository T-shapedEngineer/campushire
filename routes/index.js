var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/campushire');
var admin = db.get('admin');
var students = db.get('students');
var education = db.get('education');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/admin', function(req, res) {
  res.render('admin')
});
router.get('/admindashboard', function(req, res) {
  res.render('admindashboard')
});
router.get('/com_login', function(req, res) {
  res.render('com_login')
});
router.get('/com_up', function(req, res) {
  res.render('com_up')
});
router.get('/stu_in', function(req, res) {
  res.render('stu_in')
});
router.get('/stu_up', function(req, res) {
  res.render('stu_up')
});
router.get('/stu_home', function(req, res) {
  res.render('stu_home')
});
router.get('/stu_dash', function(req, res) {
  res.render('stu_dash')
});
router.get('/forgot', function(req, res) {
  res.render('forget')
});
// admin login
router.post('/adminlogin', function(req, res) {
  var email =  req.body.email;
  var password = req.body.password;
  admin.findOne({"email":email,"password":password}, function(err,docs){
    console.log(docs);
    if(!docs){
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  });
});
// student Signup
router.post('/postsignupdata', function(req, res) {
  students.insert(req.body, function(err,docs){
    if(err){
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  })
});
// student Login
router.post('/studentindata', function(req, res) {
  var email =  req.body.Email;
  var password = req.body.Password;
  students.findOne({"email":email,"password":password}, function(err,docs){
    console.log(docs);
    if(!docs){
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  });
});
// Education Data
router.post('/educationData', function(req, res) {
  education.insert(req.body, function(err,docs){
    if(err){
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  })
});
//find education
router.get('/geteducationData', function(req, res) {
  education.find({},function(err,docs){
    if(err){
      res.sendStatus(500);
    }
    else{
      console.log(docs);
      res.send(docs);
    }
  })
});
//Update Education Data
router.put('/updateeducationData/:id', function(req, res) {
  education.update({"_id":req.params.id},{$set:req.body} ,function(err,docs){
    if(err){
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  })
});
//Remove Education Data
router.delete('/removeeducationData/:id', function(req, res) {
  education.remove({"_id":req.params.id}, function(err,docs){
    if(err){
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  })
});
module.exports = router;


