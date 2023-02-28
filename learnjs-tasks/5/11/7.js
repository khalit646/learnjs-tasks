function formatDate(date){
    const SECOND = 1000, MINUTE = SECOND * 60, HOUR = MINUTE * 60

    let s = Date.now() - date
    if(s < SECOND){
        return "прямо сейчас"
    }
    if(s < MINUTE){
        return Math.trunc(s/SECOND)+" сек. назад"
    }
    if(s < HOUR){
        return Math.trunc(s/MINUTE)+" мин. назад"
    }
    return date.getDate().toString().padStart(2, 0) + '.' +
        (date.getMonth()+1).toString().padStart(2, 0) + '.' +
        date.getFullYear().toString().slice(2) + ' ' +
        date.getHours().toString().padStart(2, 0) + ':' +
        date.getMinutes().toString().padStart(2, 0)
}