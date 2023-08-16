// Esto sólo en los módulos nativos que no tienen promesas nativas
//const { promisify } = require('node:utils'); // otra manera de importar las promesas
//const readFilePromise = promisify(fs.readFile);

// Manera actual de leer ficheros de manera asincrona con el modulo fs/promises
const fs = require('node:fs/promises');



console.log('Leyendo el primer archivo ...');
const text = fs.readFile('./archivo.txt', 'utf-8')
    .then(then => {
        console.log("Primer texto: ", text);
    }); //

console.log('Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo ...');
const secondText = fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log("Primer texto: ", text);
    });