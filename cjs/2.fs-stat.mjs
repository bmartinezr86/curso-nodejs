import { statSync } from 'node:fs'; // a partir de node 16 se recomienda poner node: antes del modulo

const stats = statSync('./archivo.txt');

console.log (
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size // tamaño en butes
);