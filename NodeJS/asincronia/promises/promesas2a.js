//Creamos 1 funcion
const somethingWillHappen = () => {    // retornamos la promesa
  return new Promise((resolve, reject) => { 
    if (true) {             // Si es verdadero, devolvemos resolve
      resolve("Hey!");
    } else {
      reject("Woooops!");    // Si no entonces devolvemos el error
    }
  });
};
//ejecutamos la funcion
somethingWillHappen()
  .then((response) => console.log(response))    // Si obtenemos un resolve
  .catch((err) => console.error(err));          // Si obtenemos un reject

//Crear segunda funcion
const error = new Error("Whoppps!");    // De esta forma "new Error" podemos debbugear mejor
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => { resolve("2da Promise");}, 2000);
    }
    else {
      reject(error);
    }
  });
};
somethingWillHappen2()//ejecutamos la Funcion 2
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//ejecutamos todas las promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {console.log("Promise All: muestra resultados como arrays", response);})
  .catch((err) => {console.error(err);});
