import axios from "axios";

export function Register_request(value){
    let response = axios.post(`/api/register`, value)
    return response;
}


export function Login_request(value){
    let response = axios.post(`/api/login`,value)
    return response;
}

export function adddata(value){
   let response =  axios.post(`/api/login`, value, {
        headers: {
            "Content-Type": "mulipart/form-data"
        }
    })
    return response;
}

export function getfiles(){
    let response = axios.get(`/api/getdata`)
    return  response
}
