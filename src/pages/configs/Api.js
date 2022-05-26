const BASE_URL = 'https://tipoktoto.pythonanywhere.com/'

export const API = {
    get: url => {
        return fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            headers: {
                'Content-type':'application/json'               
            }
        }).then(res => res.json())
    }, 
    post: (url,data) => {
        return fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type':'application/json'               
            }
        }).then(res => res.json())
    }
}

