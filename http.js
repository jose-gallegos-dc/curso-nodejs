const http = require('http');

const server = http.createServer((request, response) => {
   console.log(request.url);

   if (request.url === '/') {
      response.write('Bienvenido...')
      return response.end();
   }

   if (request.url === '/about') {
      response.write('acerca de')
      return response.end();
   }

   response.write(`
      <h1>No se encuentra el recurso</h1>
      <p>404</p>
      <a href="/">Ir al inicio</a>
   `);
   response.end();
});

server.listen(3000);

console.log('server listen port 3000');