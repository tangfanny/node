var express = require('express');
var router = express.Router();

//设置get和post路由
router.route('/login').get(function(req,res){
  res.render('login',{
    title : 'login'
   })
}).post(function(req,res){
	var name = req.body.name;
    var adminModel = global.dbHandel.getModel('admin');

    adminModel.find({name : name},function(err,docs){
    	if(docs){
    		res.send('ok')
    	}else{
    		res.send('no')
    	}
    })

    
  
});

module.exports = router;
