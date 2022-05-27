const os = require('os') //OS built-in module 


//info about current user
const user = os.userInfo();

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}`);



const currentOS = {
    name: os.type(), //get the os name
    release: os.release(),//version
    totalMem: os.totalmem(),//total amount of system memory in byte
    freeMem: os.freemem(),//amount of free system memory in byte
    platform: os.platform(),//platform
}

console.log(currentOS);