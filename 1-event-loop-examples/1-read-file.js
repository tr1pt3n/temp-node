const { readFile } = require('fs');

console.log('start a first task');
//check file path
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log('error');
        return;
    }
    console.log(result);
    console.log('end a first task');
});

console.log('start a second task');