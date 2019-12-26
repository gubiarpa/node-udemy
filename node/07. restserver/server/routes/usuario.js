const express = require('express');
const app = express();

app.get('/usuario', function(req, res) {
    res.json('GetUsuario')
});

app.post('/usuario', function(req, res) {
    let body = req.body; // se obtiene el body de la petición

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    })
});

module.exports = app;