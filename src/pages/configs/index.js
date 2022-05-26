import { API } from "./Api"

export const signUp = data => {
    return API.post('users/register/', data)
}
export const signIn = data => {
    return API.post('auth/token/login', data)
}