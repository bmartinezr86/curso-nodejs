const http = require("node:http");
const { findAvailablePort } = require("./10.free-port.js");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

// usando un modulo local
findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `El servidor esta escuchando en el puerto http://localhost:${port}`
    );
  });
});

// si ponemos el puerto 0, se abrira uno aleatorio que se encuentre libre (no recomendable para producción)
// server.listen(0, () => {
//   `El servidor esta escuchando en el puerto http://localhost:${
//     server.address().port // recuperamos el puerto que esta usando el servicio creado
//   }`;
// });
