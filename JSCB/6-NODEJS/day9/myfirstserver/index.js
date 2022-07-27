'use strict';

const http = require('http');
const url = require('url');

/**
 * Socket = bind(hostname, port)
 */

const hostname = 'localhost';
const port = 8000;

/**
 * http://localhost:8000/edicion/barbanza/?section=deportes&fecha=2019-12-03
 */

//const partes = url.parse('http://admin:1234@localhost:8000/edicion/barbanza/?section=deportes&fecha=2019-12-03#miHash');

//console.log(partes);

function manejarPeticion(req, res) {
  res.writeHead(200, {
    //'content-type': 'text/plain',
    'content-type': 'application/json',
    'x-meloinvento': 'hola',
  });

  const body = {
    message: 'hola mundo',
  };

  //res.end('hola mundo');
  res.end(JSON.stringify(body));
}

const server = http.createServer(manejarPeticion);

server.listen(port, hostname, () => {
  console.log(`escuchando peticiones en el puerto ${port}`);
});
