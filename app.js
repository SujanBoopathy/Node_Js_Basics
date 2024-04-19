// const log = require("./logger");
//1) Module wrapper functions
console.log("request has been sent to endpoint");

console.log(__filename);
console.log(__dirname);
console.log(require);
console.log(exports);
console.log(module);

// 2) path in build libraries to work with paths.
const path = require('path');

var pathObject = path.parse(__dirname);

console.log(pathObject);

// 3) os libraries.

const os = require("os");
var freeMemory = os.freemem();
console.log(`freeMemory : ${(freeMemory/1024)/1024} mb`);

var totalMemory = os.totalmem();
console.log(`totalMemory : ${(totalMemory/1024)/1024} mb`);

// 4) working with files

const fs = require('fs');
var files = fs.readdirSync('./');

fs.readdir('./',function(err,response){
    if(err) console.log('error : ',err);
    else console.log(response);
})
console.log(files);

// 5) Events

const EventEmitter = require("events");

emitter = new EventEmitter();


// emitter.on("messageLogged", (id,url)=>{
//     console.log(`listener called ${id} , ${url}`);
// })
// emitter.emit("messageLogged",1,"url");

emitter.on("messageLogged", (event)=>{
    console.log(`listener called ${JSON.stringify(event)}`);
    console.log(`listener called `,event);
})
emitter.emit("messageLogged",{id : 123, url : 'http://webhost00.com'});

// 6) Extends EventEmitter by Logger.

const Logger = require("./logger");

const logger = new Logger();


logger.on("messageLogged",(args)=>{
    console.log("message logged : ",args);
})

logger.log("request sent");

// 7) Working with http 

const http = require('http');

const server = http.createServer((request, response)=>{
    console.log("Connection created");
    if(request.url === '/'){
        response.write("Welcome to my node js app");
        response.end();
    }
    else if(request.url === '/courses'){
        response.write(JSON.stringify({1 : "node js course", 2 : "express js course"}));
        response.end();
    }
});

server.listen(3000);
console.log("Listening on port : 3000 ....");

// without http request .
// server.on("Connection",()=> {
//     console.log("event triggered");
// })

// server.emit("Connection");

