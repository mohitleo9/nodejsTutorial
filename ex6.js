var dirmodule = require('./dirmodule.js')

dirmodule(process.argv[2], process.argv[3], function(err, list){
    if(err){
        console.log('error')
        return
    }
    for(i in list){
        console.log(list[i])
    }
})
