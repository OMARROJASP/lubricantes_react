import axios from "axios";

const lubricanteApi = axios.create({
    baseURL:'http://localhost:8080'
})

lubricanteApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token'),
    }
    return config;
})

export default lubricanteApi;