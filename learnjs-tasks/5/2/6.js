function randomInteger(min, max){
    min -= 0.5
    max += 0.5
    let a = max - min
    return Math.round(Math.random() * a + min)
}