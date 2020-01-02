require('./config/config'); // ejecuta el archivo

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario')); // importamos la ruta (routes) del Usuario

app.get('/', function(req, res) {
    res.json('Hello World')
});

mongoose.connect(`mongodb://localhost:27017/cafe`, (err, res) => {
    if (err) throw err;
    console.log(`Base de datos Online`);
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${ process.env.PORT }`);
});