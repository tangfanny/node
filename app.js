var express = require('express');
var app  = express();
var routes = require('./routres/index');

app.use(express.static(__dirname+'/public');
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',__dirname+'/views');




app.get('/',function(req,res){
  res.send('hello world');
});

app.use('login',routes)













app.listen(3030);
