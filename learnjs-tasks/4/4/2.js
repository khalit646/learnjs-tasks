let calculator = {
    read(){
        this.a = +prompt("Введите первое значение","")
        this.b = +prompt("Введите второе значение","")
    },
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    }
}