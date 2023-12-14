'use strict'

var express = require('express');
var materialesController = require('../controllers/MaterialesController');

var api = express.Router();



api.post('/registro_materiales_admin',materialesController.registro_materiales_admin); 
api.get('/obtener_materiales_admin/', materialesController.obtener_materiales_admin);
api.put('/actualizar_materiales_admin/',materialesController.actualizar_materiales_admin); 
api.delete('/eliminar_materiales_admin/',materialesController.eliminar_materiales_admin);    

module.exports = api;