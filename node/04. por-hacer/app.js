const argv = require('yargs').argv;
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear tarea'.green);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer'.purple);
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}