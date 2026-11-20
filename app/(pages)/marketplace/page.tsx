'use client'

import NFTCard from "@/app/components/Cards/Nftcard";
import Search_Component from "@/app/components/Inputs/Search";
import { NFTCardData } from "@/app/lib/CardData";
import { useState } from "react";

export default function Marketplace(){
    const [activeTab, setActiveTab] = useState("NFTs")
    const [search, setSearch] = useState("");


    const filteredItems =
        NFTCardData.filter((item) =>
            item.titlt.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    


    return(
        <div>
            <div className="lg:py-[80px] md:py-[50px] py-[20px] lg:px-[195px] md:px-[90px] px-[20px] flex flex-col gap-y-[30px]">
                <div className="flex flex-col gap-y-[10px]">
                    <p className="lg:text-[51px] md:text-[38px] text-[28px] font-semibold">Browse Marketplace</p>
                    <p className="lg:text-[22px] text-[16px] font-light">Browse through more than 50k NFTs on the NFT Marketplace.</p>
                </div>
                <Search_Component value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>


            {/** Tab section */}
            <div className="flex flex-row justify-around border-t-2 border-t-secondary">
                <div 
                    className="flex flex-row lg:mx-[195px] md:mx-[90px] mx-[20px] gap-x-[16px] h-[60px] w-full justify-center items-center cursor-pointer" 
                    style={activeTab === "NFTs"?{borderBottom:"2px solid #858584"}:{}}
                    onClick={() => setActiveTab("NFTs")}
                >
                    <p className={activeTab === "NFTs"?
                            "lg:text-[22px] text-[16px] font-semibold cursor-pointer"
                        :
                            "lg:text-[22px] text-[16px] font-semibold text-accent cursor-pointer"
                    }>NFTs</p>
                    <p className={
                        activeTab === "NFTs" ? 
                            "font-mono text-[16px] rounded-full bg-accent px-[10px] py-[5px] cursor-pointer sm:block hidden"
                        :
                            "font-mono text-[16px] rounded-full bg-secondary px-[10px] py-[5px] cursor-pointer sm:block hidden"}
                    >{NFTCardData.length}</p>
                </div>
                <div 
                    className="flex flex-row lg:mx-[195px] md:mx-[90px] mx-[20px] gap-x-[16px] h-[60px] w-full justify-center items-center cursor-pointer" 
                    style={activeTab === "Collections"?{borderBottom:"2px solid #858584"}:{}}
                    onClick={() => setActiveTab("Collections")}
                >
                    <p className={activeTab === "Collections"?
                            "lg:text-[22px] text-[16px] font-semibold cursor-pointer"
                        :
                            "lg:text-[22px] text-[16px] font-semibold text-accent cursor-pointer"
                    }>Collections</p>
                    <p className={
                        activeTab === "Collections" ? 
                            "font-mono text-[16px] rounded-full bg-accent px-[10px] py-[5px] cursor-pointer sm:block hidden"
                        :
                            "font-mono text-[16px] rounded-full bg-secondary px-[10px] py-[5px] cursor-pointer sm:block hidden"}
                    >{"5"}</p>
                </div>
            </div>

            {/** The list section */}
            <div className="lg:pb-[80px] lg:pt-[60px] md:py-[50px] py-[20px] lg:px-[195px] md:px-[90px] px-[20px] w-full">
                <div className="lg:grid lg:grid-cols-3 lg:gap-[30px] md:grid md:grid-cols-2 md:gap-[30px] grid grid-cols-1 gap-[30px] w-full">
                    {
                        activeTab === "NFTs"?
                            filteredItems.map((item, index) => (
                                <NFTCard key={index} price={item.price} imageurl={item.image} bid={item.bid} title={item.titlt} artist_name={item.artist_name} profile_url={item.profile_url}/>
                            ))
                        :
                            filteredItems.reverse().slice(0,5).map((item, index) => (
                                <NFTCard key={index} price={item.price} imageurl={item.image} bid={item.bid} title={item.titlt} artist_name={item.artist_name} profile_url={item.profile_url}/>
                            ))
                            
                    }
                </div>
            </div>
        </div>
    )
}