function printReverse(list){
    if(list){
        printReverse(list.next)
        console.log(list.value)
    }
}

function printReverse2(list){
    let arr = []
    for(let i = list; i !== null; i = i.next){
        arr.push(list.value)
    }
    for(let i = arr.length - 1; i >= 0; i--){
        console.log(i)
    }
}