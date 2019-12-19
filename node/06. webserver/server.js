const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Billy',
        anio: new Date().getFullYear()
    });
})

app.get('/data', (req, res) => {
    res.send('Hello Data')
})

const port = 3000;

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});