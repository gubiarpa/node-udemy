const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

    return temp;
}

module.exports = {
    getInfo
}

getInfo(argv.direccion)
    .then(console.log);