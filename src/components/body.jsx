import { getfiles } from "../helpers/request";
import { useState } from "react";

export default function Body() {
    const [data , setdata] = useState([])
    let response = getfiles()
    response.then(res =>{
       setdata(res.data);
    })
    return (
        <>

            <div className="px-[30px] mt-[40px]">
                <div className="flex justify-between">
                    <span className="text-white" >Spotify playlist</span><span className="text-white">Show all</span>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-5 px-[20px]">

            {
            data.map((item,index)=>(
                <div key={index} className="bg-[#221f24] rounded-[10px]">
                <div className="p-[20px]">
                    <img className="w-full h-full rounded-[15px]" src={item.cover_image} alt="" />
                    <h3>{item.name}</h3>
                    <p className=" max-h-[20px] overflow-hidden">{item.description}</p>
                </div>
            </div>
            ))
        }
            </div>
        </>
    );
}