function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if( arr[i] < a || b < arr[i]){
            arr.splice(i--, 1)
        }
    }
    return arr
}