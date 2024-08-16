import axios from "axios";

export const apiContacts = axios.create({
    baseURL:"https://connections-api.goit.global/"

})


export const setToken = (token) => {
    apiContacts.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
    apiContacts.defaults.headers.common.Authorization = ``
}