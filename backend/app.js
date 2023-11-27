'use strict';

const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 4201;


var materiales_route = require('./routes/materiales');


const dbUrl = 'mongodb+srv://JirkiRuiz:V9bWXJA2W2X5oWXG@clusteroilwell.lvkne1h.mongodb.net/?retryWrites=true&w=majority';

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log('Connected to MongoDB successfully');
        app.listen(port, function () {
            console.log('Server running on port 4201 - test');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    app.use(bodyparser.urlencoded({extended:true}));  //no se si se va a utlizar
    app.use(bodyparser.json({limit: '50mb', extended:true}))  //no se si se va a utlizar

    app.use((req,res,next)=>{ //no se si vamos a utlizar esto
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
        res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
        next();
    }); //no se si vamos a usar esto

    app.use('/api', materiales_route);

module.exports = app;
