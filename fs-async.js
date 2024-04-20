const {readFile, writeFile} = require("fs");
const { test } = require("node:test");

readFile('./content/test.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    const test_data = data;
    readFile('./content/test2.txt','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        const test_data_2 = data;
        writeFile(
            './content/async-result.txt',
            `Here is the result : ${test_data} and ${test_data_2}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log("success , response : "+result);
            }
        )
    })
})