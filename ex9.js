http = require('http')
bl = require('bl')

response1 = null
http.get(process.argv[2], function(response){
    response.setEncoding('utf8')
    response.pipe(bl(function (err, data){
        console.log(data.toString());
        response2()
    }))
})
response2 = function(){
    http.get(process.argv[3], function(response){
        response.setEncoding('utf8')
        response.pipe(bl(function (err, data){
            console.log(data.toString());
            response3()
        }))
    })
}

response3 = function(){
    http.get(process.argv[4], function(response){
        response.setEncoding('utf8')
        response.pipe(bl(function (err, data){
            console.log(data.toString());
        }))
    })
}
