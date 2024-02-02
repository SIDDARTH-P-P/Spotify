const usernameRegExp = /^[a-zA-Z0-9_]{4,8}$/;
const phoneRegExp = /^[0-9]{10}$/;
const emailRegExp = /^[a-z0-9_\.]+@[a-z0-9\.\-]+[a-z]{2,6}$/
const passwordRegExp = /^[a-zA-Z0-9]{3,}$/;
import toast from "react-hot-toast";


export function ValidateRegister(value) {
    const error = {}
    if (!usernameRegExp.test(value.username)) {
        error.username = toast.error("Please enter a valid username");
    }
    else if (!emailRegExp.test(value.email)) {
        error.email = toast.error("Please enter a valid email");
    }
    else if (!passwordRegExp.test(value.password)) {
        error.password = toast.error("Please enter a valid password");
    }
    else if (value.cpassword !== value.password) {
        error.cpassword = toast.error("Password does not match!");
    }
    return error;
}

export function validatelogin(value) {
    const error = {}
    if (!usernameRegExp.test(value.username)) {
        error.username = toast.error("Please enter a valid username");
    }
    else if (!passwordRegExp.test(value.password)) {
        error.password = toast.error("Please enter a valid password");
    }
    return error;
}

export function validateform(value) {
    const error = {}
    if (!usernameRegExp.test(value.name)) {
        error.username = toast.error("Please enter a valid username");
    }
    return error;
}