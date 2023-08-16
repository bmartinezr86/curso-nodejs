const path = require("node:path");

console.log(path.sep); // barra separadora de carpetas según el SO

// unir rutas con path join
const filePath = path.join("content", "subfolder", "text.txt"); // saca la ruta independientemente de la barra que use el SO para separar carpetas
console.log(filePath);

const base = path.basename("/tmp/bmartinez/secret.txt"); // saca el nombre del fichero de la ruta
console.log(base);

const filename = path.basename("/tmp/bmartinez/secret.txt", ".txt"); // asi quitamos el txt
console.log(filename);

const extension = path.extname("/tmp/bmartinez/secret.txt"); // saca la extensión
console.log(extension);
