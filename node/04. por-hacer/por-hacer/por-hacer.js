const fs = require('fs');

let listadoPorHacer = []; // arreglo de tareas

const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };
    
    listadoPorHacer.push(porHacer);
    guardarDb();
    
    return porHacer;
}

const listar = () => {
    cargarDb();
    return listadoPorHacer;
}

const actualizar = (descripcion, estado) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(t => t.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        guardarDb();
        return true;
    }
}

const borrar = (descripcion) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(t => t.descripcion === descripcion);
    if (index >= 0) {
        // listadoPorHacer.splice(index, 1);
        console.log(`Se eliminó el elemento de índice ${ index }`);
        // guardarDb();
    }
}

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer); // objeto transformado en string
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    }); // escribe el archivo
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}