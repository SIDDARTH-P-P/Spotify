import { useEffect, useState } from "react";
import { get_list } from "../helpers/request";
import { add_list } from "../helpers/request";


export default function Popup({ id }) {
    const [list, setlist] = useState([])
    useEffect(() => {
        let token = localStorage.getItem("token")
        let response = get_list(token)
        response.then(res => {
            setlist(res.data[0].playlist)
        })
    }, [])


    let add = (e) => {
        console.log(e);
        console.log(id);
        let token = localStorage.getItem("token")
        add_list(token,e,id)
    }



    return (
        <>
            <div className="absolute left-[800px] top-[400px]">
                <div className="bg-white w-[200px] h-[100px] rounded-[10px] overflow-hidden hover:overflow-y-scroll">
                    <ul>
                        {list?.map((item, index) => (
                            <li onClick={() => add(item)} key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}