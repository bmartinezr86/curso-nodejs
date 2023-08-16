// Esto sólo en los módulos nativos que no tienen promesas nativas
//const { promisify } = require('node:utils'); // otra manera de importar las promesas
//const readFilePromise = promisify(fs.readFile);

// Manera actual de leer ficheros de manera asincrona con el modulo fs/promises
import { readFile } from 'node:fs/promises'; // para poder utilizar el await se tiene que usar CommonsES

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log("Primer texto: ", text);
    console.log("Primer texto: ", secondText);
});


