function debounce(func, time){
    let call = true
    return function(...args){
        if(!call) return
        call = false
        setTimeout(()=>call=true,time)
        func.apply(this, args)
    }
}