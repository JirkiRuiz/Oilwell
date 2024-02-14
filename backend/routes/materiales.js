'use strict'

var express = require('express');
var materialesController = require('../controllers/MaterialesController');
var categoriaController = require('../controllers/CategoriaController');
var auth = require('../middleware/authenticate');

var api = express.Router();



api.post('/registro_materiales_admin', auth.auth,materialesController.registro_materiales_admin); 
api.get('/obtener_materiales_admin/:id',auth.auth ,  materialesController.obtener_materiales_admin);
api.get('/listar_materiales_admin/:filtro?',auth.auth, materialesController.listar_materiales_admin);
api.put('/actualizar_materiales_admin/:id',auth.auth, materialesController.actualizar_materiales_admin); 
api.delete('/eliminar_materiales_admin/:id',auth.auth, materialesController.eliminar_materiales_admin);  

api.post('/registro_categoria_admin', categoriaController.registro_categoria_admin);
api.delete('/eliminar_categoria_admin/:id', categoriaController.eliminar_categoria_admin);


api.get('/listar_materiales_categoria/:categoria', materialesController.listar_materiales_categoria);

api.get('/listar_categorias/', categoriaController.listar_categorias);

module.exports = api;