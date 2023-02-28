function aclean(arr){
    return Array.from(new Map(
        arr.map(e=>[e.toLowerCase().split('').sort().join(''), e])
    ).values())
}