const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

app.get('/usuario', (req, res) => {
    res.json('GetUsuario')
});

app.post('/usuario', (req, res) => {
    let body = req.body; // se obtiene el body de la petición

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        // Si sucede algún error
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({
        id
    })
});

app.delete('usuario', (req, res) => {
    res.json('delete Usuario');
});

module.exports = app;