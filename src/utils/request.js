import axios from "axios";

const request = axios.create({
    baseURL: 'https://wyy-api-wxy.vercel.app',
    timeout: 10000
})


request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(response => {
    return response
})


export default request