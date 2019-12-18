const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

/*
app.get('/', (req, res) => {
    // res.send('Hello World')

    let salida = {
        nombre: 'Billy',
        edad: 32,
        url: req.url
    }

    res.send(salida);

});
*/

app.get('/data', (req, res) => {
    res.send('Hello Data')
})

const port = 3000;

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});