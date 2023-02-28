function getSecondsToTomorrow(){
    const SECONDS_IN_DAY = 24*60*60
    let i = new Date()
    i.setHours(0,0,0,0)
    return SECONDS_IN_DAY - Math.trunc((Date.now()-i)/1000)
}