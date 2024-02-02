import axios from "axios";

export function Register_request(value){
    let response = axios.post(`/api/register`, value)
    return response;
}


export function Login_request(value){
    let response = axios.post(`/api/login`,value)
    return response;
}