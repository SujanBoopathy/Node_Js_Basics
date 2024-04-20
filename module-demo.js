// CommonJS , every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./names");
console.log(names);

const sayHi = (name) => {
    console.log("Hi ",name);
}

sayHi(names.john);
sayHi(names.henry);

console.log(names.admin);

