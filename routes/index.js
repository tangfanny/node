var express = require('express');
var router = express.Router();


router.route('/login').get(function(req,res){
  res.render('login',{
    title : 'login'
   })
}).post(function(req,res){
    
    if(req.body.name){
      res.send({msg:'ok',code:'20000'})
    }
  
});
router.route('/register').get(function(req,res){
	res.render('register',{
	title:'regitser'
	})
}).post(function(req,res){
	console.log(req.body.name)
})

module.exports = router;
