import Homenav from "../components/home_nav";
import Body from "../components/body";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
    return (
        <>
        <Toaster/>
            <div className="md:grid md:grid-cols-4 md:gap-1">
                <div className="bg-black">
                    <div className="bg-[#07050e] m-[5px] rounded-[7px]">
                        <h1 className="flex justify-start ms-[30px] text-white text-[20px] py-[15px]"><img className="w-[30px] bg-white rounded-full me-[10px]" src="./spotify.png" alt="" />Spotify</h1>
                        <h1 className="flex justify-start ms-[30px] text-white text-[20px] py-[15px]"><img className="w-[30px] bg-white rounded-full me-[10px]" src="./home.svg" alt="" />Home</h1>
                        <h1 className="flex justify-start ms-[30px] text-white text-[20px] py-[15px]"><img className="w-[30px] bg-white rounded-full me-[10px]" src="./search.svg" alt="" />Search</h1>
                    </div>

                    <div className="bg-[#07050e] m-[5px] rounded-[7px]">
                        <h1 className="text-white text-[20px]"><img className="w-[25px] bg-white rounded-full mx-[10px] mt-[15px]" src="./list.svg" alt="" />Your Libarary <img className="w-[25px] bg-white rounded-full mx-[10px] mt-[15px]" src="./add.svg" alt="" /></h1>
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
                    <Homenav/>
                    <Body/>
                    <Footer/>
                </div>
            </div>

        </>
    );
}