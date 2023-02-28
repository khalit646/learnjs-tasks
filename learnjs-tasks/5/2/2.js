function fixed(n){
    let f = n.toString()

    let [a, b] = f.split('.')

    if(!b || b.length <= 1){
        return f
    }

    let frs = +b[0]
    let sec = +b[1]
    if(sec >= 5 ){
        frs++
    }
    return a + '.' + frs
}

alert(fixed(6.35))