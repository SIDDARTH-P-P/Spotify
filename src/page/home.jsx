import Homenav from "../components/home_nav";
import Body from "../components/body";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
import SongFooter from "../components/songfooter";
import { get_list } from "../helpers/request";
import { get_all_list } from "../helpers/request";
import { useEffect, useState } from "react";
import { list_name } from "../helpers/request";

export default function Home() {
    const [flag, setflag] = useState()
    const [song, setsong] = useState()
    const [list, setlist] = useState([])
    const [playlist, setplaylist] = useState()
    const [playlistflag,setplaylistflag] = useState()

    useEffect(() => {
        let token = localStorage.getItem("token")
        let response = get_list(token)
        response.then(res => {
            setlist(res.data[0].playlist)
        })
    }, [song])

    function getsong_list(list_name) {
        setplaylistflag(!playlistflag);
        let token = localStorage.getItem("token")
        let response = get_all_list(token, list_name);
        response.then(res => {
            setplaylist(res.data)
        })
    }

    let token = localStorage.getItem("token")
    function add_data(e) {
        setflag(!flag)
        e.preventDefault();
        let formdata = new FormData(e.target);
        let name = event.target[0].value;
        list_name(name, token)
    }

    return (
        <>
            <Toaster />
            <div className="md:grid md:grid-cols-4 md:gap-1">
                <div className="bg-black">
                    <div className="bg-[#07050e] m-[5px] rounded-[7px]">
                        <h1 className="flex justify-start ms-[30px] text-white text-[20px] py-[15px]"><img className="w-[30px] bg-white rounded-full me-[10px]" src="./spotify.png" alt="" />Spotify</h1>
                        <h1 className="flex justify-start ms-[30px] text-white text-[20px] py-[15px]"><img className="w-[30px] bg-white rounded-full me-[10px]" src="./home.svg" alt="" />Home</h1>
                        <h1 className="flex justify-start ms-[30px] text-white text-[20px] py-[15px]"><img className="w-[30px] bg-white rounded-full me-[10px]" src="./search.svg" alt="" />Search</h1>
                    </div>

                    <div className="bg-[#07050e] m-[5px] rounded-[7px]">
                        <h1 className="text-white text-[20px]"><img className="w-[25px] bg-white rounded-full mx-[10px] mt-[15px]" src="./list.svg" alt="" />Your Libarary <img className="w-[25px] bg-white rounded-full mx-[10px] mt-[15px]" src="./add.svg" alt="" onClick={() => setflag(!flag)} /></h1>
                        {
                            flag ? <form onSubmit={add_data}> <input type="text" name="list_name" /> <input type="submit" /></form> : null
                        }
                        {
                            list.length == 0 ? <Noplaylist /> :
                                <ul>
                                    {list?.map((item, index) => (
                                        <li className="text-white h-[60px] mt-7" onClick={() => getsong_list(item)} key={index}>{item}</li>
                                    ))}
                                </ul>

                        }
                        <div>
                            <div className=" flex justify-between mx-[30px] mt-[70px]">
                                <p className="mt-[10px] text-white"><span>Leagel</span> <span>Privacy Center</span> <span>Privacy Policy</span> <span>Cookies</span></p>
                            </div>
                            <div className="mx-[29px]">
                                <p className="mt-[10px] text-white"><span>About Ads</span> <span>Accassibilty</span></p>
                                <p className="mt-[10px] text-white"><span>Cookies</span></p>
                            </div>
                            <button className="m-[30px] p-[15px] rounded-[10px]">English</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 bg-[#07050e]">
                    <Homenav />
                    {
                        playlistflag ? <Body setsong={setsong} /> : <Play playlist={playlist}/>
                    }
                    <Footer />
                </div>
            </div>
            <SongFooter data={song} />
        </>
    );
}



function Noplaylist() {
    return (
        <div className=" overflow-hidden hover:overflow-y-scroll max-h-[250px] m-[5px]">
            <div className="bg-[#221f24] m-[5px] rounded-[7px]">
                <h1 className="mt-[10px] text">Create your first plalist</h1>
                <h2 className="mt-[10px]">it's easy, well help you</h2>
                <button className=" rounded-[20px] p-[5px] my-[10px]">Create playlist</button>
            </div>

            <div className="bg-[#221f24] m-[5px] rounded-[7px]">
                <h3 className="mt-[10px]">Let's find some podcast to follow</h3>
                <h2 className="mt-[10px]">we'll keep your updated on new episodes</h2>
                <button className="rounded-[20px] p-[5px] my-[10px]">Browse poadcast</button>
            </div>
        </div>
    );
}



function Play({playlist}) {
    return (
        <>
            <div className="px-[30px] mt-[40px]">
                <div className="flex justify-between">
                    <span className="text-white" >Spotify playlist</span><span className="text-white">hh</span>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-5 px-[20px]">
                {
                    playlist?.map((item, index) => (
                        <div onClick={() => add(item)} key={index} className="bg-[#221f24] rounded-[10px]">
                            <div className="p-[20px]">
                                <img className="w-full h-full rounded-[15px]" src={item.cover_image} alt="" />
                                <h3><span className="flex justify-center">{item.name}</span><span onClick={() => setpopup(!pop)}><img onClick={() => fav(item)} src="./fav.svg" alt="" /></span></h3>
                                <p className=" max-h-[20px] overflow-hidden">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}