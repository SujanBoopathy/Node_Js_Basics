const EventEmitter = require('events');

const customEmiter = new EventEmitter();

customEmiter.on('response',(name)=>{
    console.log("data received from ",name);
})

customEmiter.on('response',()=>{
    console.log("some other logic used here");
})

customEmiter.emit('response','john');

// Example in http 
// const http = require('http');

// const server = http.createServer();

// server.on('request',(req,resp)=>{
//     console.log("Welcome");
//     resp.end();
// })

// server.listen(5000);