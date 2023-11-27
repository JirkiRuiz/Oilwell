    'use strict'

    var Materiales = require('../models/materiales');
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
               

    
const obtener_materiales_admin = async function(req, res) {
    try {
        let materiales = await Materiales.find();
    
        if (materiales.length > 0) {
            res.status(200).send({ data: materiales });
        } else {
            res.status(404).send({ message: 'No se encontraron materiales' });
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
        
    


module.exports = {
    registro_materiales_admin,
    obtener_materiales_admin,
    actualizar_materiales_admin,
    eliminar_materiales_admin 

        
}

