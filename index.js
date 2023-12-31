const express = require("express");
const path = require('path');
require('dotenv').config();
const cors = require("cors");


const { dbConnection } = require("./database/config");
const port = process.env.PORT
//Crear el servidor express
const app = express();


//cofigurar CORS
app.use( cors() );

//Lectura y parseo del body

app.use( express.json())

//Base de datos
dbConnection();

// Directorio público
app.use( express.static('public') );

// Rutas

app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/incomes', require('./routes/incomes') );
app.use( '/api/savings', require('./routes/saving') );
app.use( '/api/loans', require('./routes/loan') );
app.use( '/api/movements', require('./routes/movement') );
app.use( '/api/friends', require('./routes/friend') );
app.use( '/api/alerts', require('./routes/alert') );
app.use( '/api/projects', require('./routes/projects') );

app.use( '/api/login', require('./routes/auth') );
app.use( '/api/upload', require('./routes/uploads') );

app.get('*', (req,res) => {
    res.sendFile( path.resolve( __dirname, './public/index.html'));
})


app.listen( port, ( ) => {
    console.log('Port: '+ port)
} )