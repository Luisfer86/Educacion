// Implementación de una API con XMLHttpRequest ó XHR
// lo realizamos ejecutando el paquete: npm instal xmlhttprequest --save

// Instanciamos el request XMLHttpRequest para permitir hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api, callback) { // Creamos una función Fetch (Busca y trae)
  let xhttp = new XMLHttpRequest();     // declaramos una referencia al objeto XMLHttpRequest

    /* 
        A nuestra referencia xhttp le pasamos un LLAMADO 'open' donde: 
        parametro1 = el metodo, (usamos 'GET' que sirve para traer la informacion)
        parametro2 = la url, (donde sacamos la información)
        parametro3 = verificación si es asincrono o no, (valor por defecto true)
    */
  xhttp.open("GET", url_api, true);

  //Cuando el estado del objeto cambia, ejecutar la función:
  xhttp.onreadystatechange = function () { // definimos la funcion que va hacer la peticion automatica cuando cambie el readyState

    /*
        Se ejecuta una validación del estado (readyState) del requerimiento hecho al servidor, 
        los estados que puede tener son:
        - ESTADO 0: inicializado
        - ESTADO 1: cargando
        - ESTADO 2: ya se cargó
        - ESTADO 3: ya hay información
        - ESTADO 4: solicitud completa (satisfactorio)
        PD: Recuerda estas trabajando con una API externa osea un servidor por lo que
        depende del servidor cuanto demore en cada estado haces un pedido por datos
        (request) y solo es aplicar lógica.
    */
    if (xhttp.readyState === 4) {

        /*
            A continuación ejecuto otra validación para evaluar la respuesta del servidor,
            aqui un resumen de los casos mas comunes:
            - ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            - ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            - ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            - ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            - ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
        */
      if (xhttp.status === 200) { 
        // Todo esto se puede simplificar de ls siguiente manera: 
        // if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
  
        callback(null, JSON.parse(xhttp.responseText));
        /*
            Estandar del callback de node con callbacks donde:
            parametro1 = Muestra que pasa si ocurre un error
            parametro2 = Cual es el resultado, en este caso una vez completada la comunicación, 
            por medio del responseText da la respuesta del servidor en forma de cadena de texto (parse)
        */
    
      } else { // como buena práctica indicamos el error
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
  };
  //Envio de la solicitud.
  xhttp.send();
}

// EJEMPLO OBTENIENDO LOS PERSONAJES DE RICK AND MORTY

let api = 'https://rickandmortyapi.com/api/character/';

fetchData(api, (error1, data1) => { // primero buscamos la lista de personajes en api
  if(error1) return console.error(error1);   // si ocurre un error, matamos retornando un error

  fetchData(api + data1.results[0].id, (error2, data2) => {   // luego buscamos en la api el id de Rick
    if(error2) return console.error(error2);    // si error, matamos retornando un error

    fetchData(data2.origin.url, (error3, data3) => {     // por ultimo la consulta a la api que contiene su dimension
       if(error3) return console.error(error3);       // si error, matamos retornando un error

      // mostramos los resultados :) 
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
      
      // rutas de las peticiones en orden
      console.log(api);
      console.log(api + data1.results[0].id); 
      console.log(data2.origin.url); 
    
    });
  });
});