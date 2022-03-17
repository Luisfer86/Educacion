const os = require('os');

//console.log(os.arch());
// Esta función nos permite ver la arquitectura en bit

//console.log(os.platform());
// Nos permite ver el sistema operativo que se usa

//console.log(os.cpus())
// Nos permite acceder a la información de los núcleos de la CPU

//console.log(os.constants)
// Nos muestra los errores del sistema

/*

// Con la siguiente función podremos ver cuanto tenemos disponible en memoria
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE}
function mb(bytes) { return kb(bytes) / SIZE}
function gb(bytes) { return mb(bytes) / SIZE}

console.log(os.freemem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

// Esta nos permite cual es nuestra capacidad en memoria
console.log(os.totalmem())

*/

// Esta función nos muestra el directorio home
// console.log(os.homedir())

// Esta función nos muestra el directorio temporal
// console.log(os.tmpdir())

// Saber el nombre de maquina
// console.log(os.hostname())

// Conocer las interfaces de Red
// console.log(os.networkInterfaces())