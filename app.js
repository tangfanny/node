var express = require('express');
var app  = express();
var routes = require('./routres/index');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


app.use(bodyParser.urldeocde({extended:true});
app.use(express.static(__dirname+'/public');
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',__dirname+'/views');

global.dbHandel = require('./database/dbHandel');
global.db = mongoose.connect('mongodb://localhost:27107/school');


app.get('/',function(req,res){
  res.send('hello world');
});

app.use('login',routes)













app.listen(3030);
