function getDateAgo(date, days){
    let d = new Date(date);

    d.setDate(date.getDate() - days);
    return d.getDate();
}