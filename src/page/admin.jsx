import { useFormik } from "formik"
import { Link } from "react-router-dom";
import axios from "axios";
import convertToBase64 from "../helpers/converter";
import { validateform } from "../helpers/form_validate";

export default function Adminpage() {
    const imageHandler = (event) => {
        convertToBase64(event.target.files[0])
            .then(base64Image => {
                formik.setFieldValue("coverimage", base64Image)
            })
            .catch(() => {
                console.log("Failed to load image!");
            })
    }

    const formik = useFormik({
        initialValues: {
            coverimage: "",
            name: "",
            description:"",
            audio:"",
        },
        validate: validateform,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (value) => {
            let formData = new FormData();
            Object.entries(value).map(item => {
                console.log(item);
                formData.append(item[0], item[1]);
            });
            axios.post(`http://localhost:3000/api/login`, formData, {
                headers: {
                    "Content-Type": "mulipart/form-data"
                }
            })
        }
    })
    return (
        <>
            <div className="login-page min" >
                <div className="form">
                    <form className="login-form" onSubmit={formik.handleSubmit}>
                        <div className=" grid grid-cols-2 gap-3">
                            <input onChange={imageHandler} id="img" className="hidden" type="file" name="image" accept="image/*" />
                            <label htmlFor="img"><span><img src="./image.svg" alt="" /> Images</span></label>
                            <input onChange={(event) => formik.setFieldValue("audio", event.target.files[0])}  id="audio" className="hidden" type="file" name="audio" />
                            <label htmlFor="audio"><span><img src="./audio.svg" alt="" /> Audio</span></label>
                        </div>
                        <input type="text" name="name" placeholder="Name" {...formik.getFieldProps("name")} />
                        <input type="text" name="description" placeholder="Description" {...formik.getFieldProps("description")} />
                        <input type="submit" value="Add" />
                        <p className="message"><Link className="link" to="/">View all list</Link></p>
                    </form>
                </div>
            </div >
        </>
    );
}