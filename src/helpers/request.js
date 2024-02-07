import axios from "axios";

export function Register_request(value) {
    let response = axios.post(`/api/register`, value)
    return response;
}


export function Login_request(value) {
    let response = axios.post(`/api/login`, value)
    return response;
}

export function adddata(value) {
    let response = axios.post(`/api/add`, value, {
        headers: {
            "Content-Type": "mulipart/form-data"
        }
    })
    return response;
}

export function getfiles() {
    let response = axios.get(`/api/getdata`)
    return response
}



export function getallfiles() {
    let response = axios.get(`/api/getalldata`)
    return response
}


export function get_list(token) {
    let response = axios.get(`api/get_list`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}

export function add_list(token, list_name, song_id) {
    let response = axios.post(`api/add_list`, { list_name, song_id }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}

export function get_all_list(token, list_name) {
    let response = axios.post(`api/get_all_list`, {list_name}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}


export function list_name(name,token){
    console.log(name);
    let response = axios.post(`api/list_name`,{name}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}