import { useFormik } from "formik";
import { ValidateRegister } from "../helpers/form_validate";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Register_request } from "../helpers/request";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const formik = useFormik(
        {
            initialValues: {
                username: "",
                email: "",
                password: "",
                cpassword: ""
            },
            validate: ValidateRegister,
            validateOnBlur: false,
            validateOnChange: false,
            onSubmit: async (value) => {
                let response = Register_request(value)
                response.then(res => {
                    if (res.status == 201) {
                        return toast.error(res.data)
                    }
                    toast.success(res.data)
                    navigate("/login")
                })
            }
        }
    )
    return (
        <>
            <Toaster />
            <div className="login-page min" >
                <div className="form">
                    <form className="login-form" onSubmit={formik.handleSubmit}>
                        <input type="text" name="username" placeholder="username" {...formik.getFieldProps("username")} />
                        <input type="email" name="email" placeholder="Email"{...formik.getFieldProps("email")} />
                        <input type="password" name="password" placeholder="password" {...formik.getFieldProps("password")} />
                        <input type="password" name="password" placeholder="password" {...formik.getFieldProps("cpassword")} />
                        <input type="submit" value="Register" />
                        <p className="message">Not registered? <Link className="link" to="/login">Login your account</Link></p>
                    </form>
                </div>
            </div >
        </>
    );
}