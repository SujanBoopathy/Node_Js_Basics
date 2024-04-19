/// every js file is function with arguments - exports, module, require, __filename , __dirname in node js
var url = "http://mylogger.io/service";

const EventEmitter = require('events');
class Logger extends EventEmitter{
    log = (message) => {
        console.log(message);

        this.emit("messageLogged",{id : 123, url : "http://web000host.com/"})
    }
}
module.exports = Logger;