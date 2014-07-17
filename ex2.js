    sum = 0
    for(i in process.argv) {
        if(i < 2) {continue}
        sum+= Number(process.argv[i])
    }
console.log(sum)
