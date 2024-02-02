export default function Footer() {
    return (
        <div className="grid grid-cols-5 gap-3 mt-[100px] px-[35px]">

            <div>
                <p className="text-white">Company</p>
                <p className="text-white">About</p>
                <p className="text-white">Jobs</p>
                <p className="text-white">For the Record</p>
            </div>

            <div>
                <p className="text-white">Commuties</p>
                <p className="text-white">For Artist</p>
                <p className="text-white">Developers</p>
                <p className="text-white">Advertising</p>
                <p className="text-white">Investors</p>
                <p className="text-white">Vendors</p>
            </div>

            <div>
                <p className="text-white">Useful Links</p>
                <p className="text-white">Support</p>
                <p className="text-white">Free Mobile App</p>
            </div>

            <div className="col-span-2">
                <div className="flex justify-end">
                    <span ><img className="w-[30px] me-3 bg-white rounded-full" src="./instagram.svg" alt="" /></span>
                    <span><img className="w-[30px] me-3 bg-white rounded-full" src="./twitter.svg" alt="" /></span>
                    <span><img className="w-[30px] bg-white rounded-full" src="./facebook.svg" alt="" /></span>
                </div>
            </div>

            <div className="border-8 border-sky-500">
                <h1>he</h1>
            </div>
        </div>
        
    );
}