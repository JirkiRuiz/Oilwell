'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 4201;

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

module.exports = app;
