// Modulos nativos
import { platform, release, arch, cpus, freemem,totalmem, uptime } from 'node:os'; // notación recomendada node:modulo
//import os from 'node:os'; // notación recomendada node:modulo


console.log('Información del sistema operativo:');
console.log('--------------------------');

console.log('Nombre del sistema operativo ', platform());
console.log('Versión del sistema operativo ', release());
console.log('Arquitectura', arch());
console.log('CPUs ', cpus());   // <-- Con esto podemos escalar aplicaciones
console.log('Memoria libre ', freemem() / 1024 / 1024);
console.log('Memoria total ', totalmem() / 1024 / 1024);
console.log('uptime ', uptime() / 60 / 60);