const url = 'https://wedev-api.sky.pro/api/user'

export const register =({login, name, password}) => {
    return fetch( url, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
        })
    }).then((response) => {
        if(response.status === 400) {
            throw new Error('Пользователь с таким логином уже существует')
        }
        if(response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if(!response.ok){
            throw new Error('Что-то пошло не так')
        }
        return response.json()
    })
}

export const signIn =({login, password}) => {
    return fetch( url + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        })
    }).then((response) => {
        if(response.status === 400) {
            throw new Error('Такого пользователья не существует:(')
        }
        if(response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if(!response.ok){
            throw new Error('Что-то пошло не так')
        }
        return response.json()
    })
}