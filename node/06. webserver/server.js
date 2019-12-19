const express = require('express');
const app = express();

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials'); // matriculamos un directorio de parciales

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Billy',
        anio: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    })
});

app.get('/data', (req, res) => {
    res.send('Hello Data')
});

const port = 3005;

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});