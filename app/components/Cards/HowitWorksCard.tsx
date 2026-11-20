import Image from "next/image"

interface HowItworksProps{
    image_url:string,
    title?:string,
    text?:string
}

export default function HowItWorksCard(
    {
        image_url = "/HowItworks1.svg",
        title = "Setup Your wallet", 
        text = "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
    }:HowItworksProps){
    return(
        <div className="bg-secondary rounded-[20px] sm:px-[30px] sm:pb-[30px] sm:pt-[10px] sm:max-w-[330px] sm:flex sm:flex-col lg:h-[439px] md:h-[337px] w-auto p-[20px] items-center gap-y-auto flex flex-row">
            <div className="relative w-[100px] h-[100px] sm:max-w-[160px] sm:h-[160px] lg:w-[250px] lg:h-[250px] flex-shrink-0">
                <Image
                    src={image_url}
                    fill
                    sizes="(max-width: 768px) 64px, 112px"
                    alt="how it works images"
                    />
            </div>
            <div>
                <p className="font-semibold lg:text-[22px] text-[16px] flex flex-col gap-y-[10px] sm:items-center items-start">{title}</p>
                <p className="sm:text-center text-start lg:text-[16px] text-[12px] font-light">{text}</p>
            </div>
        </div>
    )
}