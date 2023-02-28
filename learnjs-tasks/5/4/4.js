function sumInput(){
    let arr = []
    while(true){
        let input = prompt("Введите значение", "")
        if(input === null || input.trim().length === 0 || isNaN(input)){
            break
        }
        arr.push(+input)
    }
    return arr.reduce((a, b)=>a+b,0)
}