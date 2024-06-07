export const getCards = (token) => {
    return fetch('https://wedev-api.sky.pro/api/kanban', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 401) {
            throw new Error('Нет авторизации')
        }
        if(response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if(!response.ok) {
            throw new Error('Что-то пошло не так')
        }
        return response.json()
    })
}

export const addNewCard = ({token, newTask}) => {
    return fetch('https://wedev-api.sky.pro/api/kanban', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: 'POST',
        body: JSON.stringify(newTask)
    }).then((response) => {
        if(response.status === 401) {
            throw new Error('Нет авторизации')
        }
        if(response.status === 400) {
            throw new Error('Полученные данные не в формате JSON')
        }
        if(response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if(!response.ok) {
            throw new Error('Что-то пошло не так')
        }
        return response.json()
    })
}

