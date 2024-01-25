'use strict'

var Materiales = require('../models/materiales');
var Categoria = require ('../models/categoria');

//Not sure if im missing some variables.




          
const registro_materiales_admin = async function(req, res) {
try {
    let data = req.body; 

     
    let reg = await Materiales.create(data);

        
    if (reg) {
        
        res.status(200).send({ message: 'Registro exitoso', data: reg });
        
    } else {
         
            res.status(500).send({ message: 'Hubo un problema al registrar los materiales' });
        }
    } catch (error) {
        
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor' });
    }
}
           


// const obtener_materiales_admin = async function(req, res) {
// try {
//     let materiales = await Materiales.find();

//     if (materiales.length > 0) {
//         res.status(200).send({ data: materiales });
//     } else {
//         res.status(404).send({ message: 'No se encontraron materiales' });
//     }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: 'Error interno del servidor' });
//     }
// }

const listar_materiales_admin = async function (req,res){
    try{
        var filtro = req.params['filtro'];

        let reg = await Materiales.find({titulo: new RegExp(filtro, 'i')});
           
            if(reg){
                res.status(200).send({data: reg});//Asi lo mandamos al front end
            }else{
                res.status(500).send({message: 'Material no encontrado'});
            }

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor' });
    }
}

            

const actualizar_materiales_admin = async function(req, res) {
try {
    let titulo = req.params['titulo']; 
    
    let data = req.body;
    
    let reg = await Materiales.findOneAndUpdate({ titulo: titulo }, {
    categoria: data.categoria,
    stock: data.stock,
    estado: data.estado,
    }, { new: true });
    
    if (reg) {
        res.status(200).send({ data: reg });
    } else {
        res.status(404).send({ message: 'Material no encontrado' });
    }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor' });
    }
}
    
    
const eliminar_materiales_admin = async function(req, res) {
try {
    let titulo = req.params['titulo']; 
    
    let reg = await Materiales.findOneAndDelete({ titulo: titulo });
    
    if (reg) {
        res.status(200).send({ message: 'Material eliminado correctamente', data: reg });
    } else {
        res.status(404).send({ message: 'Material no encontrado' });
    }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor' });
    }
    
}
    
const listar_materiales_categoria = async function(req,res){

    let categoria = req.params['categoria'];

    if(categoria == null || categoria == 'null'){

        let reg = await Materiales.find().sort({createdAt: -1});

        res.status(200).send({data:reg})

    }else{

        let reg = await Materiales.find({categoria:new RegExp(categoria,'i')}).sort({createdAt: -1});

        res.status(200).send({data:reg})
        }
}



module.exports = {
registro_materiales_admin,
listar_materiales_admin,
// obtener_materiales_admin,
actualizar_materiales_admin,
eliminar_materiales_admin,
listar_materiales_categoria,
    
}