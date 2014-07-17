fs = require('fs')
path = require('path')

fs.readdir(process.argv[2], function (error, files){
    extension = '.' + process.argv[3]
    for (i in files){
        if (path.extname(files[i]) === extension){
            console.log(files[i])
        }
    }
})
