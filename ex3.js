var fs = require('fs')

buf = fs.readFileSync(process.argv[2]);
lines = buf.toString().split('\n').length - 1
console.log(lines);
