const http = require("http");

const puerto = 2686;

http.createServer(router).listen(puerto);

function router(req, res) {
  console.log("... Un navegador solicito una petición al puerto", puerto);
  console.log(req.url);
//   res.writeHead(201, { "Content-Type": "text/plain" });
  switch (req.url) {
    case "/":
      res.write("<h1>Hola, tenemos una conexion HTTP de NodeJS exitosa</h1>");
      res.end();
      break;
    default:
      res.write("Error 404: No se lo que quieres");
      res.end();
  }
}

console.log("===> Se procedio a generar un HTTP en el puerto:",puerto);