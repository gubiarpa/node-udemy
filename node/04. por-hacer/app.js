const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
        console.log('Tarea registrada exitosamente');
        break;
    case 'listar':
        let tareas = porHacer.listar();
        tareas.forEach(e => {
            console.log('=== Por Hacer ==='.magenta);
            console.log(e.descripcion);
            console.log(`Estado: ${ e.completado }`)
        });
        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Tarea actualizada exitosamente')
        break;
    case 'borrar':
        // porHacer.borrar(argv.descripcion);
        console.log('Tarea eliminada exitosamente')
        break;
    default:
        console.log('Comando no reconocido');
        break;
}