import { getfiles } from "../helpers/request";
import { useEffect, useState } from "react";
import Allsong from "../page/alldata";
import Popup from "./playlist";

export default function Body({ setsong }){
    const [flag, setflag] = useState()
    const [data, setdata] = useState([])
    const [songes, setsonges] = useState()
    const [pop,setpopup] = useState()

    useEffect(() => {
        let response = getfiles()
        response.then(res => {
            setdata(res.data);
        })

    }, [])

    function add(item) {
        setsonges(item)
    }

    useEffect(() => {
        setsong(songes);
    }, [songes])

    function fav(item) {
        let token = localStorage.getItem("token")
        playlist(item._id,token);
    }

    return (
        <>
        {
            pop ? <Popup/> : <></>
        }
            <div className="px-[30px] mt-[40px]">
                <div className="flex justify-between">
                    <span className="text-white" >Spotify playlist</span><span onClick={() => setflag(!flag)} className="text-white">{flag ? "Back" : "Show all"}</span>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-5 px-[20px]">

                {
                    flag ? <Allsong setsong={setsong} /> :
                        data.map((item, index) => (
                            <div onClick={() => add(item)} key={index} className="bg-[#221f24] rounded-[10px]">
                                <div className="p-[20px]">
                                    <img className="w-full h-full rounded-[15px]" src={item.cover_image} alt="" />
                                    <h3><span className="flex justify-center">{item.name}</span><span onClick={()=>setpopup(!pop)}><img onClick={() => fav(item)}  src="./fav.svg" alt="" /></span></h3>
                                    <p className=" max-h-[20px] overflow-hidden">{item.description}</p>
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    );
}