var express = require('express');
var router = express.Router();
const userModel=require("./users");
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/create', async function(req, res) {
  const data=await userModel.create({
    username:"manish",
    age:24,
    name:"nayan dubey"
  });
  res.send(data);
});

module.exports = router;
