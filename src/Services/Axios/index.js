import axios from "axios"

const axios_instances = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

export default axios_instances;