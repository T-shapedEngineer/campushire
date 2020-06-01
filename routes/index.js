var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/campushire');
var admin = db.get('admin');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/admin', function(req, res) {
  res.render('admin')
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
router.get('/forgot', function(req, res) {
  res.render('forget')
});
// admin login
router.post('/adminlogin', function(req, res) {
  var email =  req.body.email;
  var password = req.body.password;
  admin.findOne({"email":email,"password":password}, function(err,docs){
    if(err){
      res.send_status(500);
    }
    else{
      res.send_status(200);
    }
  });
});
module.exports = router;


