// Esto sólo en los módulos nativos que no tienen promesas nativas
//const { promisify } = require('node:utils'); // otra manera de importar las promesas
//const readFilePromise = promisify(fs.readFile);

// Manera actual de leer ficheros de manera asincrona con el modulo fs/promises
import { readFile } from 'node:fs/promises'; // para poder utilizar el await se tiene que usar CommonsES



console.log('Leyendo el primer archivo ...');
const text = await readFile('./archivo.txt', 'utf-8') // para poder usar el await, se requiere envolverlo con algo
console.log("Primer texto: ", text);

console.log('Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo ...');
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log("Primer texto: ", secondText);

