class Calculator{
    constructor(){
        this.operators = {
            "+": this.#add,
            "-": this.#sub
        }
    }
    #add(a, b){
        return a + b
    }
    #sub(a, b){
        return a - b
    }
    addMethod(name, func){
        this.operators[name] = func
    }
    calculate(expr){
        let a = expr.split(" ")
        let f = +a[0]
        if(isNaN(f)){
            throw new Error(`Invalid operand: ${a[0]}`)
        }
        for(let i = 1; i < a.length; i++){
            let clb = this.operators[a[i++]]
            if(clb === undefined){
                throw new Error(`Unknown operator: ${a[i-1]}`)
            }
            let s = +a[i]
            if(isNaN(s)){
                throw new Error(`Invalid operand: ${a[i]}`)
            }
            f = clb(f, s)
        }
        return f
    }
}