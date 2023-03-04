function sumTo(n){
    return n ? n + sumTo(n - 1) : 0
}

function sumTo2(n){
    let res = 0
    for(let i = 1; i <= n; i++){
        res += i
    }
    return res
}

function sumTo3(n){
    return (1 + n)*n/2
}