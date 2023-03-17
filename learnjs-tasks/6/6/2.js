function sum(n){
    function t(f){
        return sum(n+f)
    }
    t[Symbol.toPrimitive] = function(){
        return n
    }
    return t
}