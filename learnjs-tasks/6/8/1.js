function printNumbers1(from, to){
    let timer = setInterval(()=>{
        console.log(from++)
        if(from > to) clearInterval(timer)
    }, 1000)
}

function printNumbers2(from, to){
    setTimeout(()=>{
        console.log(from)
        if(from < to) {
            printNumbers2(from+1, to)
        }
    }, 1000)
}