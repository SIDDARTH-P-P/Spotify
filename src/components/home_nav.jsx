import Body from "./body";

export default function Homenav() {
    return (
        <>
            <nav className="bg-red-500 grid grid-cols-2 gap-4">
                <div className="py-[7px] ps-[20px]">
                <span><img className="bg-orange-500 rounded-[50px]" src="./left_arrow.svg" alt="" /></span> <span><img className="bg-orange-500 rounded-[50px]" src="./right_arrow.svg" alt="" /></span>
                </div>
                <div className="flex justify-end pe-[20px] py-[7px]">
                    <button className="me-[20px]">Sign up</button>
                    <button className=" rounded-[15px] p-[10px]">Login</button>
                </div>
            </nav>
            <Body/>
        </>
    );
}