// CommondJS require import module
const hola = require('./sum'); // puede tener el nombre que quiera
const {sum} = require('./sum'); // se obliga a mantener el sum en el nombre de la constante

console.log(sum(1,2));