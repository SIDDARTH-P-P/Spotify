import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { get_list } from "../helpers/request";
import { useState,useEffect } from "react";

export default function Homenav() {
    const [list, setlist] = useState([])
let token = localStorage.getItem("token");


    const navigete = useNavigate()
    const search = (e) => {
        let value = e.target.value;
        console.log(value);
        // let filter_datalist = apiData?.filter(item => item.name?.toLowerCase().includes(value?.toLowerCase()));
        // setData(filter_datalist);
    }

    return (
        <>
            <Toaster />
            <nav className="bg-[#000000]">
                <div className="flex justify-between">
                    <div className="py-[10px] ps-[20px] m-[5px]">
                        <span><img className="bg-orange-500 rounded-[50px]" src="./left_arrow.svg" alt="" /></span> <span><img className="bg-orange-500 rounded-[50px]" src="./right_arrow.svg" alt="" /></span>
                    </div>

                    <div className="mt-[20px]">
                        <input onInput={search} className="w-[500px] rounded-[5px]" type="search" placeholder="search" />
                    </div>

                    <div className="pe-[20px] py-[7px]">
                        <button onClick={() => {
                            let cnf = confirm("are sure do you want to logout")
                            if (cnf) {
                                localStorage.removeItem("token");
                                toast.success("successfully logout")
                                return navigete("/login")
                            }
                        }} className="me-[20px]">Logout</button>

                        <button className=" rounded-[15px] p-[10px]"><Link to="/login">Login</Link></button>
                    </div>
                </div>
            </nav>
        </>
    );
}