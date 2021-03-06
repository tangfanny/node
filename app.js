var express = require('express');
var app  = express();
var routes = require('./routres/index');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//中间件 test
app.use(bodyParser.urldeocde({extended:true});
app.use(express.static(__dirname+'/public');
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',__dirname+'/views');

//数据4444库链接
global.dbHandel = require('./database/dbHandel');
global.db = mongoose.connect('mongodb://localhost:27107/school');


//拦截地址
app.get('/',function(req,res){
  res.send('hello wo111rld12');
});

//路由中间件拦截
app.use('login',routes)
app.use('register',routes);


app.listen(3050);
