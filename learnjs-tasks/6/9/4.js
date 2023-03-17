function throttle(func, time){
    let call = true
    let last
    return function(...args){
        if(!call){
            last = [ths, args]
            return
        }
        call = false
        func.apply(this, args)
        setTimeout(()=>{
            call=true
            if(last){
                func.apply(last[0], last[1])
                last = undefined
            }
        },time)
    }
}