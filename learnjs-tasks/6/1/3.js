function fib3(n, first = 0, sec = 0){
    return n? fib3(n-1, sec, first + sec || 1) : sec
}