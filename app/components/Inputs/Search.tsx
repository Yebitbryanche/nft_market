import { SearchIcon } from "lucide-react";

interface SearchProps{
    onChange:(e:any) => void
    value:string
}

export default function Search_Component({onChange, value}:SearchProps){
    return(
        <div className="py-[12px] px-[20px] flex flex-row justify-between w-fill rounded-[20px] border-secondary border-1 gap-x-[10px] items-center">
            <input onChange={onChange} value={value} type="text" className="flex-1 border-none outline-none" placeholder="Search your favourite NFTs"/>
            <SearchIcon/>
        </div>
    )
}