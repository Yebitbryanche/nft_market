import Image from "next/image";

interface NftCardProps {
  imageurl?: string;
  title?: string;
  profile_url?: string;
  artist_name?: string;
  price?: string;
  bid?: string;
}

export default function NFTCard({
  imageurl = "/placeholder1.png",
  title = "Distant Galaxy",
  profile_url = "/avatars/avatar1.png",
  artist_name = "MoonDancer",
  price = "1.63 ETH",
  bid = "0.33 wETH",
}: NftCardProps) {
  return (
    <div className="group flex flex-col w-full max-w-none md:max-w-[420px] rounded-[20px] overflow-hidden bg-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Featured NFT Image Wrapper */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[20px]">
        <Image
          src={imageurl}
          fill
          alt={title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          className="object-cover rounded-t-[20px] transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      {/* Card Details Container */}
      <div className="flex flex-col gap-y-5 md:gap-y-6 bg-secondary rounded-b-[20px] p-5 md:p-7">
        {/* Title & Artist */}
        <div className="flex flex-col gap-y-1.5 min-w-0">
          <p className="text-lg sm:text-xl md:text-[22px] text-text font-semibold truncate leading-tight">
            {title}
          </p>
          <div className="flex items-center gap-x-3 min-w-0">
            <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={profile_url}
                fill
                alt={artist_name}
                className="object-cover"
              />
            </div>
            <p className="font-mono text-xs sm:text-sm text-text/80 truncate font-light">
              {artist_name}
            </p>
          </div>
        </div>

        {/* Price & Bid Details */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex flex-col gap-y-1">
            <p className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-wider">
              Price
            </p>
            <p className="text-xs sm:text-sm md:text-base font-mono font-medium text-text">
              {price}
            </p>
          </div>

          <div className="flex flex-col gap-y-1 items-end">
            <p className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-wider">
              Highest bid
            </p>
            <p className="text-xs sm:text-sm md:text-base font-mono font-medium text-text">
              {bid}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}