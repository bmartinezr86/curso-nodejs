// Objeto process (de nodejs)
// - Objeto global que proporciona información y control sobre el proceso actual de ejecución.

// argumentos de entrada
// console.log(process.argv);

// controlar el proceso y su salida
// process.exit(0); // ha ido todo bien y termina aquí
// process.exit(1); // hay algún error y sale para no quedarse en mal estado

// controlar eventos del proceso
// process.on('exit', () => {
//     // limpiar los recursos o la consola
// });

// saber el directorio desde el cual se ejecuta el proceso
console.log(process.cwd());

// controlar las variables de entorno
console.log(process.env.PEPITO); // se puede pasar el valor de la variable antes de ejecutarlo con node
