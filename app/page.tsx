"use client"

import { Eye, Rocket } from "lucide-react";
import Button from "./components/Buttons/Button";
import Image from "next/image";
import TrendingCard from "./components/Cards/TrendingCollections";
import LineButton from "./components/Buttons/LineButton";
import { CategoryData, HowItWorks, NFTCardData, TopCreators } from "./lib/CardData";
import ProfileCard from "./components/Cards/profileCard";
import CategoryCard from "./components/Cards/Categorycard";
import NFTCard from "./components/Cards/Nftcard";
import CountDownCard from "./ui/CountDown/CountDown";
import UserPill from "./components/Pills/UserPill";
import WhiteButton from "./components/Buttons/WhiteButton";
import HowItWorksCard from "./components/Cards/HowitWorksCard";
import JoinUs from "./components/Inputs/JoinUs";
import { useRouter } from "next/navigation";


export default function Homepage(){
  const router = useRouter()

  return(
    <div className="">
      {/**
       * header section with aniated side card on desktop
       */}
      <div className="flex flex-row gap-x-[30px] lg:py-[80px] md:py-[50px] py-[20px] lg:px-[195px] md:px-[90px] px-[20px]">
        {/**text section */}
        <div className="flex flex-col flex-1 gap-y-[30px]">
          <div className="flex flex-col gap-y-[20px]">
            <p className="lg:text-[67px] md:text-[38px] text-[28px] font-semibold text-start leading-none">Discover digital art & Collect NFTs</p>
            <p className="lg:text-[22px] md:text-[16px] font-light">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          </div>

          {/**responsive image layout */}

          <div className="flex flex-col md:hidden block">
            <div className="relative w-full lg:h-[401px] md:h-[221px] h-[206px]">
              <Image
                src={'/HeaderImage.png'}
                fill
                alt="Header image"/>
            </div>
            <div className="bg-secondary p-[20px] rounded-b-[20px] flex flex-col gap-y-[10px]">
              <p className="text-[22px] font-semibold">Space Walking</p>
              <div className="flex flex-row gap-x-[12px]">
                <div className="relative w-[24px] h-[24px]">
                  <Image 
                    src={'/avatars/avatar1.png'}
                    fill
                    alt=" header avatar"
                    />
                </div>
                <p>Animakid</p>
              </div>
            </div>
          </div>
          
          <div className="md:max-w-[224px] w-full hidden md:block">
            <Button text="Get Started" icon={<Rocket color="white" size={20}/>} />
          </div>

          <Button text="Get Started" icon={<Rocket color="white" size={20}/>} className="md:hidden block" />

          <div className="flex flex-row gap-x-[30px] w-full justify-between">
            <div className="lg:pr-[40px]">
              <p className="font-mono text-text lg:text-[28px] text-[22px] font-bold">240k+</p>
              <p className="lg:text-[24px] text-[16px] font-light text-text">Total Sale</p>
            </div>

            <div className="lg:pr-[40px]">
              <p className="font-mono text-text lg:text-[28px] text-[22px] font-bold">100k+</p>
              <p className="lg:text-[24px] text-[16px] font-light text-text">Auctions</p>
            </div>

            <div className="lg:pr-[40px]">
              <p className="font-mono text-text lg:text-[28px] text-[22px] font-bold">240k+</p>
              <p className="lg:text-[24px] text-[16px] font-light text-text">Artists</p>
            </div>
          </div>
          

        </div>

        {/**image section */}
        <div className="flex flex-col flex-1 md:block hidden lg:h-[401px] md:h-[330px]">
          <div className="relative lg:w-full md:w-[330px] lg:h-[401px] md:h-[221px]">
            <Image
              src={'/HeaderImage.png'}
              fill
              alt="Header image"/>
          </div>
          <div className="bg-secondary p-[20px] rounded-b-[20px] flex flex-col gap-y-[10px] lg:w-full md:w-[330px]">
            <p className="text-[22px] font-semibold">Space Walking</p>
            <div className="flex flex-row gap-x-[12px]">
              <div className="relative w-[24px] h-[24px]">
                <Image 
                  src={'/avatars/avatar1.png'}
                  fill
                  alt=" header avatar"
                  />
              </div>
              <p>Animakid</p>
            </div>
          </div>
        </div>

      </div>

      {/**The trending collection section */}
      <div className="lg:py-[80px] py-[40px] flex flex-col gap-y-[60px] lg:px-[195px] md:px-[90px] px-[20px]">
        <div className="flex flex-col gap-y-[10px]">
          <p className="lg:text-[38px] font-semibold text-[28px]">Trending Collection</p>
          <p className="lg:text-[22px] font-light text-[16px]">Checkout our weekly updated trending collection.</p>
        </div>

        <div className="flex flex-row justify-between gap-6">
          {/* Always visible (Small, Medium, Large) */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <TrendingCard 
              primary_url="/Images/PrimaryPhoto1.png" 
              secondary_1="/Images/Image2.png" 
              secondary_2="/Images/Image3.png"
              artist_url="/avatars/avatar2.png"
            />
          </div>

          {/* Hidden on Small, Visible on Medium and Large */}
          <div className="hidden sm:block sm:w-1/2 lg:w-1/3">
            <TrendingCard 
              primary_url="/Images/PrimaryPhoto2.png" 
              secondary_1="/Images/Image1.png" 
              secondary_2="/Images/Image1.png"
              artist_url="/avatars/avatar3.png"
              artist_name="Shroomie"
              collection_name="Magic Mushrooms"
            />
          </div>

          {/* Hidden on Small & Medium, Visible on Large */}
          <div className="hidden lg:block lg:w-1/3">
            <TrendingCard 
              primary_url="/Images/PrimaryPhoto3.png" 
              secondary_1="/Images/Image4.png" 
              secondary_2="/Images/Image5.png"
              artist_url="/avatars/avatar4.png"
              artist_name="BeKind2robots"
              collection_name="Disco Machines"
            />
          </div>
        </div>
      </div>

      {/**The Artist section */}
      <div className="lg:py-[80px] py-[40px] flex flex-col lg:gap-y-[60px] gap-y-[40px] lg:px-[195px] md:px-[90px] px-[20px]">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-y-[10px]">
            <p className="lg:text-[38px] font-semibold text-[28px]">Top creators</p>
            <p className="lg:text-[22px] font-light text-[16px]">Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
          <div className="md:block hidden">
            <LineButton text="See All" icon={ <Eye size={20} className="text-primary"/>}/>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-[30px] gap-[20px] ">
          {TopCreators.slice(0, 12).map((item, index) => {
            // Hide item 6 and above on extra small (< 640px)
            // Hide item 7 and above on small (>= 640px and < 768px)
            const isExtraSmallHidden = index >= 5 ? "hidden sm:block" : "";
            const isSmallHidden = index >= 6 ? "hidden lg:block" : "";

            return (
              <div 
                key={item.id || index} 
                className={`${isExtraSmallHidden} ${isSmallHidden}`}
              >
                <ProfileCard 
                  rank={item.id} 
                  name={item.artist_name} 
                  imageSrc={item.image_url} 
                  sales={item.total}
                />
              </div>
            );
          })}
        </div>
        <div className="block md:hidden">
          <LineButton text="See All" icon={ <Eye size={20} className="text-primary"/>}/>
        </div>
      </div>

      {/** the Category section */}
      <div className="lg:py-[80px] py-[40px] flex flex-col gap-y-[40px] lg:px-[195px] md:px-[90px] px-[20px]">
        <p className="font-semibold text-[28px]">Browse Categories</p>
        <div className="md:grid md:grid-cols-4 md:gap-[30px] grid grid-cols-2 gap-[20px]">
            {
              CategoryData.map((item, index) => {
                return(
                  <CategoryCard key={index} icon_url={item.icon} bg_image={item.image} category={item.label} />
                )
              })
            }
        </div>
      </div>


      {/** Explore NFTs Section */}
      <div className="lg:py-[80px] py-[40px] flex flex-col gap-y-[40px] lg:px-[195px] md:px-[90px] px-[20px]">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-y-[10px]">
            <p className="lg:text-[38px] font-semibold text-[28px]">Discover More NFTs</p>
            <p className="lg:text-[22px] font-light text-[16px]">Explore new trending NFTs</p>
          </div>
          <div className="md:block hidden">
            <LineButton text="See All" icon={ <Eye size={20} className="text-primary"/>} onClick={() => router.push("/marketplace")}/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-[30px] md:gap-x-[30px] [&>:last-child]:md:hidden [&>:last-child]:lg:block">
          {NFTCardData.slice(0,3).map((item, index) => (
            <NFTCard 
              key={index}
              imageurl={item.image} 
              price={item.price} 
              bid={item.bid} 
              title={item.titlt} 
              artist_name={item.artist_name} 
              profile_url={item.profile_url}
            />
          ))}
        </div>
      </div>

      {/** the bidding section */}
      <div
        className="w-full h-[590px] md:h-[630px] lg:h-[640px] lg:py-[80px] py-[40px] bg-cover bg-center bg-no-repeat relative flex flex-col justify-end"
        style={{ backgroundImage: "url('/NFTHighlight.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-0" />
        <div className="lg:px-[195px] md:px-[90px] px-[20px] relative z-10 md:flex md:flex-row md:justify-between md:items-end flex flex-col items-start gap-y-[30px]">
          <div className="flex flex-col gap-y-[30px]">
            <UserPill
              image_url="/avatars/avatar4.png"
              artist_name="Shroomie"
            />
            <p className="lg:text-[51px] text-[38px] font-semibold text-text">Magic Mashrooms</p>
            <div className="md:block hidden">
              <WhiteButton text="See NFT" icon={<Eye size={20} className="text-primary"/>}/>
            </div>
          </div>
          <CountDownCard/>
            <div className="block md:hidden w-full">
              <WhiteButton text="See NFT" icon={<Eye size={20} className="text-primary"/>}/>
            </div>
        </div>
      </div>

      {/** How it works section */}
      <div className="lg:py-[80px] py-[40px] flex flex-col gap-y-[40px] lg:px-[195px] md:px-[90px] px-[20px]">
        <div className="flex flex-col gap-y-[10px]">
          <p className="lg:text-[38px] font-semibold text-[28px]">How it works</p>
          <p className="lg:text-[22px] font-light text-[16px]">Find out how to get started</p>
        </div>
        <div className="sm:flex sm:flex-row sm:justify-between flex flex-col gap-y-[30px] items-center">
          {
            HowItWorks.map((item, index) => {
              return(
                <HowItWorksCard title={item.title} text={item.text} image_url={item.url} key={index}/>
              )
            })
          }
        </div>
      </div>


      {/**ASTronaut section */}
      <div className="my-10 lg:my-20 mx-5 sm:mx-10 md:mx-16 lg:mx-auto lg:max-w-[1050px] bg-secondary p-8 md:p-12 lg:p-[60px] rounded-[20px] flex flex-col lg:flex-row items-center gap-8 lg:gap-x-12 xl:gap-x-[80px]">
        {/* Image Container */}
        <div className="relative w-full max-w-[300px] h-[220px] sm:max-w-[350px] sm:h-[260px] lg:w-[425px] lg:h-[310px] lg:max-w-none shrink-0">
          <Image
            src="/Astro.png"
            fill
            alt="Weekly digest illustration"
            className="object-contain"
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 425px"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-y-6 lg:gap-y-10 w-full min-w-0 text-center lg:text-left">
          <div className="flex flex-col gap-y-2 lg:gap-y-2.5">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold leading-tight text-white">
              Join our weekly digest
            </h2>
            <p className="text-sm sm:text-base lg:text-[22px] font-light leading-relaxed text-white/80">
              Get exclusive promotions &amp; updates straight to your inbox.
            </p>
          </div>

          {/* Form / Button component */}
          <div className="w-full">
            <JoinUs />
          </div>
        </div>
      </div>
    </div>
  )
}