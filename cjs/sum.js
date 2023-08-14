function sum(a, b) {
    return a + b;
}

// CommondJS module export (en proceso de deprecated)
// module.exports - variable global que utilizamos para indicar que modulos esta exportando este archivo
module.exports = sum;                                     // de esta manera podemos poner el nombre que queramos a la constante donde importemos este modulo

module.exports = {                                        // de esta nabera nos obliga a que se llame sum la constante
    sum
}