import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://demofolha.4bee.com.br:8840/api/'
const instance = axios.create({baseURL: BASE_URL})


export const Login = async (user, pass) => {
    const requestLogin = await axios.request({
        method: 'POST',
        url: 'http://demofolha.4bee.com.br:8840/api/login',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type"
        },
        data: {
            username : user,
            password : pass
        },
    })
    return requestLogin
}

export const Admissoes = async () => {

    const request = await instance.get('admissoes?paginaAtual=0&itensPorPagina=10&status=1', {
        headers: {
            'Access-Control-Allow-Origin' : 'http://demofolha.4bee.com.br:8840/api/',
            "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZXN0b3Itc2NjcCIsImV4cCI6MTU1NDMyMjE1NX0.CQzFL9ejDFa8_qavLRSNvKgvVrG0YUuiT90tQiHl7X0hh4_BcX0hv3j6V1xDklvGslwEwEb_S6Uk19I8VAlZZA",
            "Content-Type": "application/json"
          }
    })
    return request
}

