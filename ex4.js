fs = require('fs')

buff = fs.readFile(process.argv[2], function read(error, data){
    if(error){ console.log(error); return;}

    lines = data.toString().split('\n').length - 1
    console.log(lines)
    })
