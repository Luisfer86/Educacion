const fetchData = require("./peticionAPI_XHR_promise_OUT"); // importamos la funcion
const API = "https://rickandmortyapi.com/api/character/"; // declaramos la ruta de la api
/*
fetchData(API)
  .then((data) => {
    console.log("# Personajes:      ", data.info.count);
    return fetchData(`${API}${data.results[0].id}`); // Concatenamos la direccion con el resultado
  })
  .then((data) => {
    console.log("Caracter:          ", data.name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log("Ubicación:         ", data.dimension);
  })
  .catch((err) => {
    console.log(err); // si hay error
  });
*/

var lf=[]
for (let i=0; i<5; i++)
{
  fetchData(API)
  .then((data)=>{
  let personajes = data.results[i].name
  let identificacion = data.results[i].id
  let genero = data.results[i].gender
  tabla = {identificacion, personajes, genero}
  lf.push(tabla)
  console.table(lf)

})
.catch((error) => console.log(error))
}

console.table(lf)