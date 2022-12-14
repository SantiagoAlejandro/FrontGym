import axios from "axios";
export const usersApi =  axios.create({
    baseURL:'https://gymsystempro.onrender.com/api/users'
})
usersApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
export const adminApi = axios.create({
    baseURL:'https://gymsystempro.onrender.com/api/admi'
})  
export const plansApi = axios.create({
    baseURL:'https://gymsystempro.onrender.com/api/plans'
})
export const personsApi =  axios.create({
    baseURL:'https://gymsystempro.onrender.com/persons/'
})
export const recordsApi = axios.create({
    baseURL:'https://gymsystempro.onrender.com/api/plans_records/'
})
export const exercisesApi = axios.create({
    baseURL:'https://gymsystempro.onrender.com/api/excercises/'
})
export const testApi = axios.create({
    baseURL:'https://gymsystempro.onrender.com/api/tests/'
})
export const body_data_api = axios.create({
    baseURL:' https://gymsystempro.onrender.com/api/body_data/'
})
export const testHistoryApi = axios.create({
    baseURL:'https://gymsystempro.onrender.com/api/tests_history/'

})
testHistoryApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
body_data_api.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
exercisesApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
recordsApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 
plansApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 
adminApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 
personsApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 