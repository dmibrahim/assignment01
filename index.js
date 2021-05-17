const { spawn } = require('child_process');
console.log("1: Before fibonacci call")

//console.log(require('./fibonacci'));
spawn("node",["./fibonacci.js"], {stdio : "inherit"});

console.log('3: after fibonnace call')