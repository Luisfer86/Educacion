/*
Los siguientes comandos ejecutan instrucciones globales
    console.log(global)
    console.log(process)
    console.log(__filename)

A continuacion se encuentra un ejemplo para terminar una ejecución infinita de intervalo:

let i =0
let intervalo = setInterval(function(){
    if ( i ===3){
        clearInterval(intervalo)
    }
    i++
    console.log('hola')
},1000)
*/

// A continuación se creará una variable global
global.miVariable = 'luisfer'
console.log(miVariable)
