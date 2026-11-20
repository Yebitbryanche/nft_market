import { Lock } from "lucide-react"
import { ReactNode } from "react"

interface InputFieldProps{
    icon?:ReactNode
    type?:string 
    placeholder?:string
}

export default function Input(
    {
        icon = <Lock color="#BDBDBD" size={20}/>,
        type = "text",
        placeholder = "Full Name"
    }:InputFieldProps
){
    return(
        <div className="max-w-[330px] px-[20px] py-[16px] bg-white rounded-[20px] h-[46px] flex flex-row gap-x-[12px]">
            <div>
                {icon}
            </div>
            <input type={type} placeholder={placeholder} className="outline-none border-none text-background w-full"/>
        </div>
    )
}