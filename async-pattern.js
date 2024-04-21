const {readFile,writeFile} = require("fs").promises;
// const util = require('util');

// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/test.txt')
//     .then((data)=> console.log(data))
//     .catch((err) => console.log(err));

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try{
        const test = await readFile('./content/test.txt','utf8');
        const test2 = await readFile('./content/test2.txt','utf8');
        await writeFile(
            './content/result-mind-grenade.txt',
            `This is Awesome : ${test} and ${test2}`,
            {flag : 'a'}
        )
    }
    catch(err){
        console.log(err);
    }
}

start();
