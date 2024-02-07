import { useEffect, useState } from "react";

export default function SongFooter({ data }) {
    const [url, setURL] = useState(null);
    useEffect(() => {
        setURL(`http://localhost:${import.meta.env.VITE_PORT}/api/get_file/${data?.file[0].filename}`);
    }, [data?.name])

    return (
        <>
            <div className=" flex justify-around">

                <div className="grid grid-cols-2">
                    <img className="w-[70px] m-[10px] rounded-[10px]" src={data?.cover_image} alt="image" />
                    <h1 className=" text-white">{data?.name}</h1>
                </div>
                    <audio src={url} controls>
                    </audio>
                <div></div>
            </div>
        </>
    );
}
