'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaSchema = Schema({
	nombre: {type: String, required: true },
	

});

module.exports = mongoose.model('categoria', CategoriaSchema);

