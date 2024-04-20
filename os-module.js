const os = require('os')

// info about current user
const user = os.userInfo();
console.log(user);

// info about system uptime 
console.log(`System UpTime in seconds : ${os.uptime()}`);

// info about current os 
const currentOS = {
    type : os.type(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
    platform : os.platform(),
    release : os.release(),
    arch : os.arch()
}

console.log(currentOS);
