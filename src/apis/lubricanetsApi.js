import axios from "axios";

const lubricanteApi = axios.create({
    baseURL:'https://charismatic-tranquility-production.up.railway.app'
})

lubricanteApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token'),
    }
    return config;
})

export default lubricanteApi;