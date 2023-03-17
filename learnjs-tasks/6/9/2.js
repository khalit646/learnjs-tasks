function delay(func, time){
    return function(...args){
        setTimeout(()=>func.apply(this, args), time)
    }
}