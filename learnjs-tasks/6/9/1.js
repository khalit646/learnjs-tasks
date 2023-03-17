function spy(func){
    let f = function(...args){
        f.calls.push(args)
        return func.apply(this, args)
    }
    f.calls = []
    return f
}