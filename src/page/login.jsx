import { useFormik } from "formik";
import { validatelogin } from "../helpers/form_validate";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Login_request } from "../helpers/request";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    const formik = useFormik(
        {
            initialValues: {
                username: "",
                password: ""
            },
            validate: validatelogin,
            validateOnBlur: false,
            validateOnChange: false,
            onSubmit: async (value) => {
                let response = Login_request(value);
                response.then(res => {
                    if (res.status == 201) {
                        return toast.error(res.data)
                    }
                    localStorage.setItem("token",res.data.token)
                    navigate("/");
                    return toast.success(res.data.msg)
                })
            }
        }
    )

    return (
        <>
            <Toaster />
            <div className="login-page min">
                <div className="form">
                    <form className="login-form" onSubmit={formik.handleSubmit}>
                        <input type="text" name="username" {...formik.getFieldProps("username")} placeholder="username" />
                        <input type="password" name="password" {...formik.getFieldProps("password")} placeholder="password" />
                        <input type="submit" value="Login" />
                        <p className="message">Not registered? <Link className="link" to="/register">Create an account</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}