const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.json('Hello World')
});

app.get('/usuario', function(req, res) {
    res.json('GetUsuario')
});

app.post('/usuario', function(req, res) {
    res.json('PostUsuario')
});

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});