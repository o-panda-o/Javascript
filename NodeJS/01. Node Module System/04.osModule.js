const os=require('os');
var totalMemory=os.totalmem();
var freeMemory=os.freemem();

// Template string
// ES6 / ES2015: ECMAScript 6
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
// We can't get such info using JS only(as it only executes inside browser)