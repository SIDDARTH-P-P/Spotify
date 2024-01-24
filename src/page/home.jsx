import Homenav from "../components/home_nav";
export default function Home() {
    return (
        <>
            <div class="grid grid-cols-4 gap-1">
                <div class="bg-black">
                    <div className="bg-gray-900 m-[5px] rounded-[7px]">
                        <h1 className="flex justify-start ms-[30px]">Spotify</h1>
                        <h1 className="flex justify-start ms-[30px]">Home</h1>
                        <h1 className="flex justify-start ms-[30px]">Search</h1>
                    </div>

                    <div className="bg-gray-900 m-[5px] rounded-[7px]">
                        <h1>Your Libarary</h1>
                        <div className=" overflow-hidden hover:overflow-y-scroll max-h-[250px] m-[5px]">
                            <div className="bg-gray-800 m-[5px] rounded-[7px]">
                                <h1 className="mt-[10px]">Create your first plalist</h1>
                                <h2 className="mt-[10px]">it's easy, well help you</h2>
                                <button className=" rounded-[20px] p-[5px] my-[10px]">Create playlist</button>
                            </div>

                            <div className="bg-gray-800 m-[5px] rounded-[7px]">
                                <h3 className="mt-[10px]">Let's find some podcast to follow</h3>
                                <h2 className="mt-[10px]">we'll keep your updated on new episodes</h2>
                                <button className="rounded-[20px] p-[5px] my-[10px]">Browse poadcast</button>
                            </div>
                        </div>

                        <div>
                            <div className=" flex justify-between mx-[30px] mt-[70px]">
                                <p className="mt-[10px]"><span>Leagel</span> <span>Privacy Center</span> <span>Privacy Policy</span> <span>Cookies</span></p>
                            </div>
                            <div className="mx-[29px]">
                                <p className="mt-[10px]"><span>About Ads</span> <span>Accassibilty</span></p>
                                <p className="mt-[10px]"><span>Cookies</span></p>
                            </div>
                            <button className="m-[30px] p-[15px] rounded-[10px]">English</button>
                        </div>
                    </div>
                </div>
                <div class="col-span-3 bg-red-200">
                    <Homenav/>
                </div>
            </div>

        </>
    );
}