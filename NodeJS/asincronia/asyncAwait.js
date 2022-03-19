async function hola(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("Hola, " + nombre);
        resolve(nombre);
      }, 2000);
    });
  }
  
  async function adios(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("Adios, ", nombre);
        resolve(nombre);
      }, 1500);
    });
  }
  
  async function hablar(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("bla bla bla bla...");
        resolve(nombre);
        reject("Se produjo un reject");
      }, 1500);
    });
  }
  
  async function main() {
    let nombre = await hola("luisfer");
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('Terminamos el proceso con :) asincronismo... ')
  }
  
  console.log('Iniciamos el proceso...')
  main();
  console.log('Terminamos el código fuera del asincronismo... ')