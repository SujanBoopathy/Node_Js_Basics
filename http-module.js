const http = require("http");

const server = http.createServer((request, response) => {
    if(request.url === '/home'){
        response.write("Welcome to our home page");
        response.end();
    }
    if(request.url === '/about'){
        response.write("This is node js app");
        response.end();
    }
    if(request.url === '/contact'){
        response.write("Please contact us by support.hsl@gmail.com");
        response.end();
    }
    if(request.url == '/error'){
        response.end(`
        <h1>Ooops ! </h1>
        <p>We can't seem to find the paga you are looking for</p>
        <a href="/home">back home</a>
    `);
    }
})

server.listen(5000,()=>{
    console.log("listening on port 5000 ...");
})