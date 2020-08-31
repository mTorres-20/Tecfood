//Para hacer funcionar esto se utilizó la versión 12.18.3 de Node.js

// 1) "npm init" usado en terminal para crear el package.json
// 2) "npm install express"
// 3) "npm install express nodemon"
//          "npm start" para correr el programa
// 4) "npm install mongoose"
// 5) "npm install dotenv" para esconder el usuario y contraseña
// Véase en package.json las dependencias para más dudas

//https://www.youtube.com/watch?v=vjf774RKrLc

var PORT = process.env.PORT || 3000; 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser =  require('body-parser');
require('dotenv/config');

const postsRoute = require('./routes/posts');
const homeRoute = require('./routes/home');
const restRoute = require('./routes/restaurants');
const ordersRoute = require('./routes/orders');
const cors = require('cors'); //enable CORS
// Parsing post requests
app.use(bodyparser.json())
//Middlewares
app.use('/posts', postsRoute);
app.use('/', homeRoute);
app.use('/restaurants', restRoute);
app.use('/orders', ordersRoute);

app.use(cors());

//Rutas

//Conexion a base de datos (véase el archivo .env para establecer conexion por usuario)
mongoose.connect(
    process.env.DB2, 
    { useNewUrlParser: true,
      useUnifiedTopology: true }, 
    () => console.log('Esto demuestra que está conectada la base de datos con el programa.')
);

app.listen(PORT);