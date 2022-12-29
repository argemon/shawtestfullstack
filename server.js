const { request } = require('node:http');
const http = require('node:http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    if (request.url === "/details"){
        response.end(JSON.stringify({
            message: "Details route",
        }))
    }

    if (request.url === "/repos"){
        response.end(JSON.stringify({
            message: "Repositories route",
        }))
    }

    response.end(JSON.stringify({
        message: "Main rout",
    }))
    
}).listen(4001, () => console.log("server on 4001"));