function sumSalaries(o){
    return Object.values(o).reduce((a, b)=>a+b,0)
}