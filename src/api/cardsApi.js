const url = 'https://wedev-api.sky.pro/api/kanban'

export const getCards =(token) => {
    return fetch( url, {
        method: 'GET',
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
        if(!response.ok){
            throw new Error('Что-то пошло не так')
        }
        return response.json()
    })
}