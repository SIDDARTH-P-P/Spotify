import { Link } from "react-router-dom";

export default function Homenav() {
    return (
        <>
            <nav className="bg-[#000000] grid grid-cols-2 gap-4">
                <div className="py-[10px] ps-[20px] m-[5px]">
                <span><img className="bg-orange-500 rounded-[50px]" src="./left_arrow.svg" alt="" /></span> <span><img className="bg-orange-500 rounded-[50px]" src="./right_arrow.svg" alt="" /></span>
                </div>
                <div className="flex justify-end pe-[20px] py-[7px]">
                    <button className="me-[20px]"><Link to="/register">Sign up</Link></button>
                    <button className=" rounded-[15px] p-[10px]"><Link to="/login">Login</Link></button>
                </div>
            </nav>
        </>
    );
}