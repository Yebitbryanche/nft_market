import Button from "@/app/components/Buttons/Button"
import Input from "@/app/components/Inputs/FormFields"
import { Lock, Mail, User2 } from "lucide-react"
import Image from "next/image"



export default function Login(){
    return(
        <div className="lg:h-[691px] flex flex-row gap-x-[60px]">
            <div className="relative flex flex-1">
                <Image
                    src={'/LoginPlaceholder.png'}
                    fill
                    alt="sigupImage"
                />
            </div>
            <div
                className="flex flex-col flex-1 gap-y-[40px] py-[100px]"
                >
                <div className="lg:max-w-[460px]">
                    <p className="lg:text-[51px] font-semibold">Create Account</p>
                    <p className="lg:text-[22px] font-light">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                </div>
                <form action="" className="flex flex-col gap-y-[30px] lg:max-w-[330px]">
                    <Input
                        placeholder="Full Name"
                        icon={<User2 color="#BDBDBD" size={20}/>}
                        type="text"
                    />
                    <Input
                        placeholder="Email"
                        icon={<Mail color="#BDBDBD" size={20}/>}
                        type="email"
                    />
                    <Input
                        placeholder="Password"
                        icon={<Lock color="#BDBDBD" size={20}/>}
                        type="password"
                    />
                    <Input
                        placeholder="Comfirm Password"
                        icon={<Lock color="#BDBDBD" size={20}/>}
                        type="password"
                    />

                    <Button text="Create account"/>
                </form>

            </div>
            
        </div>
    )
}