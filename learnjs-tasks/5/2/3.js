function readNumber(){
    let res
    do{
        res = prompt("Введите числовое значение", "")
        if(res === "" || res === null){
            return false
        }
    }while( isNaN(res))

    return +res
}