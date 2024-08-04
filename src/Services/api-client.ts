import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '21aced4ed38e486d84d4b823b47380d0'
    }

})