// Esto sólo en los módulos nativos que no tienen promesas nativas
//const { promisify } = require('node:utils'); // otra manera de importar las promesas
//const readFilePromise = promisify(fs.readFile);

// Manera actual de leer ficheros de manera asincrona con el modulo fs/promises
const { readFile } = require('node:fs/promises'); // para poder utilizar el await se tiene que usar CommonsES

// Funcion async 
async function init() {
    console.log('Leyendo el primer archivo ...');
    const text = await readFile('./archivo.txt', 'utf-8'); // para poder usar el await, se requiere envolverlo con algo
    console.log("Primer texto: ", text);

    console.log('Hacer cosas mientras lee el archivo...');

    console.log('Leyendo el segundo archivo ...');
    const secondText = await readFile('./archivo2.txt', 'utf-8');
    console.log("Primer texto: ", secondText);
}

// IIFE - Inmediatly Invoked Function Expression (una función que se llama a si misma)
// Es lo mismo que la funcion iniyt(), pero sin la necesidad de ejecutarla a parte.
(
    async () => {
        console.log('Leyendo el primer archivo ...');
        const text = await readFile('./archivo.txt', 'utf-8');
        console.log("Primer texto: ", text);

        console.log('Hacer cosas mientras lee el archivo...');

        console.log('Leyendo el segundo archivo ...');
        const secondText = await readFile('./archivo2.txt', 'utf-8');
        console.log("Primer texto: ", secondText);
    }
)()


init(); // ejecución de la misma

