let getUsuarioById = (id, callback) => {

    // Crea un objeto
    let usuario = {
        nombre: 'Billy',
        id
    }

    if (id === 20) { // Supone una búsqueda en BD
        callback(`El usuario con id ${ id } no existe en la BD`);
    } else {
        // Invoca la función enviada y envía como parámetro el objeto creado
        callback(null, usuario);
    }

}

let print = (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos:', usuario);
}

getUsuarioById(10, print);