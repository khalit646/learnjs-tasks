async function loadJson(url) {
    response = await fetch(url)
    if(response.status){
        throw new Error(response.status);
    }
    return await response.json();
}

loadJson('no-such-user.json').catch(alert);