var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MaterialesSchema = Schema({
    titulo: { type: String, required: true},
    categoria:{type: String, required: true},
    stock: {type: Number, required: true },
    estado: { type: String, required: true},
});

module.exports = mongoose.model('materiales', MaterialesSchema);