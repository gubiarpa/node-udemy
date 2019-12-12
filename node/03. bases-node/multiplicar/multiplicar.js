const fs = require("fs");

// const MAX_INDEX = 10;

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número'); // No es un return
            return;
        }

        let data = ''; // Init

        for (let i = 1; i <= 10; i++) {
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

module.exports = {
    crearArchivo
}