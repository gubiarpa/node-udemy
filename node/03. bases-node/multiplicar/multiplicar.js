const fs = require("fs");
const colors = require('colors');

const MAX_INDEX = 20;

let crearArchivo = (base, limite = MAX_INDEX) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número'); // No es un return
            return;
        }

        let data = ''; // Init

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        })

    });
}

let listarTabla = (base, limite = MAX_INDEX) => {
    return new Promise((resolve, reject) => {

        // Validación de errores
        let errorsStr = '';
        if (!Number(base)) errorsStr += `${ base } no es un número\n`;
        if (!Number(limite)) errorsStr += `${ limite } no es un número\n`;
        if (!(errorsStr == '')) {
            reject(errorsStr); // No es un return
            return;
        }

        // Una vez validado, imprime la tabla

        console.log('*******************************'.green);
        console.log(`         Tabla del ${ base }`.green);
        console.log('*******************************'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`);
        }
        resolve(`tabla-${ base }`);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}