function camelize(str){
    return str.split('-').reduce(
        (acc, val)=>acc+val.charAt(0).toUpperCase()+val.slice(1))
}