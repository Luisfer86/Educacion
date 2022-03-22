const https = require("https");
const API_BASE = 'https://rickandmortyapi.com/api/'; 
// EJEMPLO OBTENIENDO LOS PERSONAJES DE RICK AND MORTY

function APIRequest(url, callback) {
    https.get(url, (respuesta) => {
        respuesta.setEncoding('utf8');
        if(respuesta.statusCode === 200) {
            let body = '';
            respuesta.on('data', (data) => {
                body += data;
            });
            respuesta.on('end', () => { 
                callback(null, JSON.parse(body));
            });
        } else {
            const error = new Error(`REQUEST ERROR ON ${url}. Status ${respuesta.statusCode}`);
            callback(error, null);
        };
    });
}

APIRequest(API_BASE + 'character/', (error, response) => {
    if(error) return console.error(error.message);

    APIRequest(API_BASE + 'character/' + response.results[0].id, (error2, response2) => {
        if(error2) return console.error(error2.message);

        APIRequest(response2.origin.url, (error3, response3) => {
            if(error3) return console.error(error3.message);

            console.log("1era rama del API:  ", response.info.count);

            console.log(" 2da rama del API:  ", response2.id);
            console.log(" 2da rama del API:   " + response2.name);
            console.log("3era rama del API:   " + response3.dimension);
        })
    });
});