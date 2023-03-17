Function.prototype.defer = function(ms){
    return (...args)=>setTimeout(()=>this(...args), ms)
}