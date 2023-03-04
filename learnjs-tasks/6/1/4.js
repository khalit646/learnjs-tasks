function printList(list){
    if(list == null){
        return
    }
    console.log(list.value)
    printNext(list.next)
}

function printList2(list){
    for(let i = list; i !== null; i = i.next){
        console.log(i.value)
    }
}