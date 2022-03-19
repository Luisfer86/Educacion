// Traer nuestro modulo de la siguiente manera:
const modulo = require('./moduloExportar.js')

// Al ejecutar       ->     console.log(modulo)
// muestra un objeto ->     { saludar: [Function: saludar], prop1: 'Hola de nuevo' }

// Al ejecutar       ->     modulo.saludar()
// muestra la función ->    Hola mundo!!!

// Al ejecutar       ->     console.log(modulo.prop1)
// muestra el string ->     Hola de nuevo