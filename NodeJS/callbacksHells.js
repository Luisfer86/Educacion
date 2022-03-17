function hola(nombre, miCallback) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      miCallback(nombre);
    }, 2000);
  }
  
  function adios(nombre, otroCallback) {
    setTimeout(function () {
      console.log("Adios, ", nombre);
      otroCallback();
    }, 1500);
  }
  
  function hablar(callbackHablar) {
    setTimeout(function () {
      console.log("bla bla bla bla...");
      callbackHablar();
    }, 1500);
  }
  
  function conversacion(nombre, veces, callback) {
    if (veces > 0) {
      hablar(function () {
        conversacion(nombre, --veces, callback);
      });
    } else {
      adios(nombre, callback);
    }
  }
  
  console.log("Iniciando proceso...");
  hola("Luis Fernando", function (nombre) {
    conversacion(nombre, 5, function () {
      console.log("Terminando proceso...");
    });
  });