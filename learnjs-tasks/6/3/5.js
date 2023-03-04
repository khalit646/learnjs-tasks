function inBetween(a, b){
    return function(c){
        return a <= c && c <= b
    }
}

function inArray(arr){
    return function(c){
        return arr.includes(c)
    }
}