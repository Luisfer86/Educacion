// Como la libreria process esta dentro de las globales no es necesario importarla
// const p = require('process');

process.on('beforeExit', ()=>{
    console.log('El proceso va a terminar')
})

process.on('exit', ()=>{
    console.log('El proceso acabó')
})

setTimeout(()=>{
    console.log('Esto va aparecer')
},3000)

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error')
    console.error(err)
})

//funcionQueNoExiste();

console.log('Si el proceso se rompe esto no va aparecer')