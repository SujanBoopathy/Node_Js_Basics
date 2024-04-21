const {createReadStream} = require("fs");


const stream = createReadStream(
    './content/bigfile.txt',
    {highWaterMark : 90000, encoding : 'utf8'}
);
// default 64kb
// last buffer - remainder
// highWaterMark - control size
stream.on('data',(data)=>{
    console.log(data);
})

stream.on('error',(err)=>{
    console.log(err);
})