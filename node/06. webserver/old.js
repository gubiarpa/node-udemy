const http = require('http'); // doesn't need "npm install ..." command

const port = 8080;

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Billy',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(port);

console.log(`Escuchando el puerto ${ port }`);