// .js -> por defecto utiliza CommondJS
// .mjs -> para utilizar ES Modules - intentar usar siempre este modelo de diseño de modularización
// .cjs -> para utilizar CommondJS

import { sum, resta, mult } from './sum.mjs'; // cuando usas mjs es recomendable usar la exptesion para evitar errores
console.log(sum(2, 3));
console.log(resta(2, 3));
console.log(mult(2, 3));