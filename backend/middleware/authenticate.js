    // 'use strict'

    // var jwt = require('jwt-simple');//Inicializamos el moduloe jwt
    // var moment = require('moment');//Usarlo para obtener fecha actual y de expiriacion del token.
    // var secret = 'davidmora';//contraeña para decodificar el token ,

    // exports.auth = function(req,res,next){ //Por que estos parametros?
    //     //Logica para poder verifica un token
        
    //    // console.log(req.headers);//Verificar cabecera de la peticion.
    //     if(!req.headers.authorization){
    //         return res.status(403).send({message: "NoHeadersError"});
    //     }

    //     var token = req.headers.authorization.replace(/['"]+/g,'');//En esta variable guardaremos nuestro token.


    //     var segment = token.split('.');//partimos el token. lo dividiremos en 3. Haremos un array con estos 3 bloques y lo partiremos por los puntos.
        

        
    //     if(segment.length !=3){
    //         return res.status(403).send({mesage: 'InvalidToken'})
    //     }else{
    //         try{
    //             var payload = jwt.decode(token, secret);//Esta variable es nuestro token ya decodificado.
                
    //             if(payload.exp <= moment().unix()){//Si la fecha de experiacion es menor a la actual que nos muestra en cosnola quiere decir que el token ya expiro.
    //                 return res.status(403).send({message: 'TokenExpirado'});

    //             }

    //         } catch (error) {
    //              return res.status(403).send({message: 'InvalidToken'})
    //         }

    //     }

    //     req.user = payload;


    //     next();
    // }