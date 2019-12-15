const descripcion = {
    alias: 'd',
    demand: true
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas registradas')
    .command('borrar', 'Elimina una tarea registrada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}