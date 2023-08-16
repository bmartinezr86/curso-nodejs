// ls mini APP con promesas
const fs = require("node:fs/promises");

// Al utilizar una función de callback el error siempre va primero para evitar que no sea tratado
fs.stat; // si da error no existe
fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.log("Error al leer el directorio ", err);
    }
  });
