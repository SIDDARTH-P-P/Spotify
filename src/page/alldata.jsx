import { useState, useEffect } from "react";
import { getallfiles } from "../helpers/request";
import Popup from "../components/playlist";

export default function Allsong({ setsong }) {
    const [data, setdata] = useState([]);
    const [songes, setsonges] = useState();
    const [pop,setpopup] = useState();
    const [id,setid] = useState("id")
    function add(item) {
        setsonges(item);
    }

    useEffect(() => {
        let response = getallfiles()
        response.then(res => {
            setdata(res.data);
        })
        setsong(songes);
    }, [songes])
    
    function fav(item) {
        setid(item._id)
    }

    return (
        <>
            {
                pop ? <Popup id={id} /> : <></>
            }

            {
                data.map((item, index) => (
                    <div onClick={() => add(item)} key={index} className="bg-[#221f24] rounded-[10px]">
                        <div className="p-[20px]">
                            <img className="w-full h-full rounded-[15px]" src={item.cover_image} alt="" />
                            <h3><span className="flex justify-center">{item.name}</span><span onClick={()=>setpopup(!pop)}><img onClick={() => fav(item)} src="./fav.svg" alt="" /></span></h3>
                            <p className=" max-h-[20px] overflow-hidden">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
