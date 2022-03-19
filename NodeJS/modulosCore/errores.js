function serompe(){
    return 3+z;
}

try{
    serompe()
} catch(err){
    console.error('--- ALERTA ---')
    console.error('--- Tenemos el siguiente error --->   ',err.message,'--- ');
    console.log('No pasa nada el código continua...')
}

console.log('El código va porque va')