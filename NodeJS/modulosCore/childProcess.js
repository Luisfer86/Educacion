const { exec, spawn } = require('child_process');
// Lo de arriba es lo mismo que
// const exec = require('child_process').exec;

/*
exec('node console.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout)
})
*/

let proceso = spawn('ls', ['-la']);

proceso.stdout.on('data', function(dato){
        console.log(dato.toString())
})

proceso.on('exit', function(){
    console.log('el proceso termino')
})
