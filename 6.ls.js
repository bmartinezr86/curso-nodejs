const fs = require('node:fs')

// Al utilizar una función de callback el error siempre va primero para evitar que no sea tratado
fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Error al leer el directorio ', err)
    return
  }

  files.forEach((file) => {
    console.log(file)
  })
})
