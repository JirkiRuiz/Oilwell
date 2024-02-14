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


const obtener_materiales_admin = async function(req, res) {
    
    var id = req.params['id']; 

    try {
        var reg = await Materiales.findById({_id:id}); 
                
        res.status(200).send({data:reg});

    } catch (error) {
        res.status(200).send({data:undefined});
    }

     
  


}

const listar_materiales_admin = async function (req,res){

    if(req.user){
        if(req.user.rol == 'admin'){
            
            var filtro = req.params['filtro'];

            let reg = await Materiales.find({titulo: new RegExp(filtro, 'i')});
            res.status(200).send({data: reg});

        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

            

const actualizar_materiales_admin = async function(req, res) {
try {
    let id = req.params['id']; 
    
    let data = req.body;
    
    let reg = await Materiales.findOneAndUpdate({_id : id }, {
    titulo : data.titulo, 
    categoria: data.categoria,
    stock: data.stock,
    estado: data.estado,
});
    res.status(200).send({data:reg});
    

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor' });
    }

}

    
    
const eliminar_materiales_admin = async function(req, res) {

if(req.user){
    if(req.user.rol =='admin'){
        
      
       var id = req.params['id']; 
       
       let reg = await Materiales.findOneAndDelete({_id:id});
        res.status(200).send({data:reg}); 
  
  
    }else{
        res.status(500).send({message: 'NoAccess'});
    
    }
}else{
        res.status(500).send({message: 'NoAccess'});
    

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
obtener_materiales_admin,
actualizar_materiales_admin,
eliminar_materiales_admin,
listar_materiales_categoria,
    
}