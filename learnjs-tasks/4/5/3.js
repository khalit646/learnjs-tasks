function Accumulator(startingValue){
    this.value = startingValue
}

Accumulator.prototype.read = function(){
    this.value += +prompt("Введите значение", "")
}