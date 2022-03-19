const fs = require("fs");
const stream = require("stream");
const util = require("util");

// EJEMPLO BASICO
/*
let data ='';
let readAbleStream = fs.createReadStream(__dirname + '/streamInput.txt')

readAbleStream.setEncoding('utf8')
readAbleStream.on('data', function (chunk){
    data += chunk
})

readAbleStream.on('end', function(){
    console.log(data)
})
*/

// EJEMPLO DE TRANSFORMACIÓN - FORMA BASE
/*
const Transform = stream.Transform

function Upper() {
    Transform.call(this)
}

util.inherits(Upper, Transform)

let readAbleStream = fs.createReadStream(__dirname + '/streamInput.txt')

readAbleStream.setEncoding('utf8')

Upper.prototype._transform = function (chunk, codif, cb) {
    chunkUpper = chunk.toString().toUpperCase()
    this.push(chunkUpper)
    cb()
}

let upper = new Upper()

readAbleStream.pipe(upper).pipe(process.stdout)
*/

// EJEMPLO DE TRANSFORMACIÓN - SIMPLIFICADO
/*
const { Transform } = require("stream");
const { createReadStream } = require("fs");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readAbleStream = createReadStream(__dirname + "/streamInput.txt");

readAbleStream.pipe(upperCaseTransform).pipe(process.stdout);
*/

// EJEMPLO DE TRANSFORMACIÓN CON CLASES DE ES6
/*
const Transform = stream.Transform;
class MayusC extends Transform {
  _transform(chunk, codif, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
  }
}

let mayusC = new MayusC();
readAbleStream.pipe(mayusC).pipe(process.stdout);
*/