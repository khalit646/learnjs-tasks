class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let res = await fetch(url)
    if(res.status != 200){
        throw new HttpError(response);
    }
    return await res.json()
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    while(true){
        let name = prompt("Введите логин?", "iliakan");
        try{
            let user = await loadJson(`https://api.github.com/users/${name}`)
            alert(`Полное имя: ${user.name}.`);
            return user
        }catch(err){
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser();
            } else {
                throw err;
            }
        }
    }
}

demoGithubUser();