function hola(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("Hola, " + nombre);
        resolve(nombre);
      }, 2000);
    });
  }
  
  function adios(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("Adios, ", nombre);
        resolve(nombre);
      }, 1500);
    });
  }
  
  function hablar(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("bla bla bla bla...");
        //resolve(nombre);
        reject('Se produjo un reject')
      }, 1500);
    });
  }
  
  //  AQUI COMENZARIA LA EJECUCIÓN
  
  console.log("iniciando el proceso");
  hola("Luis Fernando")
    //  .then((nombre) => {    return adios(nombre);  })  // Esto es lo mismo que la siguiente linea
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("terminado el proceso");
    })
    .catch(error => {
        console.error('------> Ha habido un error:', error)
    })