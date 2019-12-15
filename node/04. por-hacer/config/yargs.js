const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion: {
            alias: 'd',
            demand: true
        }
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion: {
            alias: 'd',
            demand: true
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('listar', 'Lista las tareas registradas')
    .command('borrar', 'Elimina una tarea registrada', {
        descripcion: {
            alias: 'd',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}