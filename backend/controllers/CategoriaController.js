'use strict'

var Categoria = require('../models/categoria');


const registro_categoria_admin = async function(req,res){
    
    let data = req.body;

	let reg = await Categoria.create(data);

	res.status(200).send({data:reg})
}

const listar_categorias = async function(req,res){

	let reg = await Categoria.find();

	res.status(200).send({data:reg})
}

const eliminar_categoria_admin = async function(req,res){
	if(req.user){
		if(req.user.rol == 'admin'){
			
			let id = req.params['id']

			let reg = await Categoria.findByIdAndDelete({_id:id})


			res.status(200).send({data:reg});
			
		}else{
			res.status(500).send({message: ' no access'})
		}
	}else{
		res.status(500).send({message: ' no access'})
	}
}


module.exports = {
	registro_categoria_admin,
	listar_categorias,
	eliminar_categoria_admin
}