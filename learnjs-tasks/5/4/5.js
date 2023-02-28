function getMaxSubSum(arr){
    let max = 0, prev = 0, neg = 0
    for(let i = 0; i < arr.length;){
        let res = 0
        for(;i < arr.length && arr[i] >= 0; i++){
            res += arr[i]
        }
        if(prev > -neg && res > -neg){
            res += prev + neg
        }
        prev = res
        max = Math.max(max, res)
        neg = 0
        for(; i < arr.length && arr[i] < 0; i++){
            neg += arr[i]
        }
    }
    return max
}