// reqdFileSync() -> leer ficheros de manera sincrona
// readFile() -> leer ficheros de manera asincrona
// callback - tarea que se ejecuta cuando una tarea se ha terminado
const fs = require('node:fs');

console.log('Leyendo el primer archivo ...');
const text = fs.readFile('./archivo.txt', 'utf-8' , (err, text) => {
    console.log(text);
}); //

console.log('Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo ...');
const secondText = fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text);
}); 

