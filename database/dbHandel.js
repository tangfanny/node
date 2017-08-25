

var mongoose = require('mongoose');
var Schema = new mongoose.Schema;
var module = require('./module');

for(let m in module){
	mongoose.model(m,new Schema(module[m]))
};


module.exports = {
	getModel : _getModel

}

function _getModel(type){
	return mongoose.model(type);
}
