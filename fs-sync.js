const {readFileSync , writeFileSync, read} = require('fs');

const test = readFileSync('./content/test.txt','utf-8');
const test2 = readFileSync('./content/test2.txt','utf-8');

console.log(test,test2);

writeFileSync(
 './content/result.txt'
,`Here is the result : ${test} and ${test2}`,
{flag : 'a'}
);