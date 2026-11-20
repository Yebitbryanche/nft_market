import Image from "next/image";

export default function UserPill({image_url, artist_name}:{image_url:string, artist_name:string}){
    return(
        <div className="py-[10px] px-[20px] flex flex-row gap-x-[10px] rounded-[20px] bg-secondary w-[151px]">
            <Image
                src={image_url}
                width={24}
                height={24}
                alt="pill image"
                className=""
            />
            <p>{artist_name}</p>
        </div>
    )
}