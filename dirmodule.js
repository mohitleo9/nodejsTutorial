fs = require('fs')
path = require('path')

function filterByExtension(dirpath, extension, callback){
    fs.readdir(dirpath, function(error, files){
        if (error){
            callback(error, null)
            return
        }
        list =[]
        for(i in files){
            if (path.extname(files[i]) === '.' + extension){list.push(files[i])}

        }
        callback(null, list)
    })
}

module.exports = filterByExtension
