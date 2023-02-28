function getSecondsToday(){
    let i = new Date()
    i.setHours(0, 0, 0, 0)
    return Math.trunc((Date.now()-i)/1000)
}