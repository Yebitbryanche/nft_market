import Image from "next/image";

interface ProfileCardProps {
  rank?: number;
  name?: string;
  sales?: string;
  imageSrc?: string;
}

export default function ProfileCard({
  rank = 1,
  name = "Keepitreal",
  sales = "34.53 ETH",
  imageSrc = "/person1.png",
}: ProfileCardProps) {
  return (
    <div className="relative w-full max-w-none lg:max-w-xs bg-secondary p-4 sm:p-5 rounded-[20px] transition-all hover:scale-[1.02] duration-300">
      {/* Ranking Badge */}
      <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-background w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10 shadow-sm">
        <span className="font-mono text-accent text-xs md:text-sm font-semibold leading-none">
          {rank}
        </span>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-5 w-full">
        {/* Profile Image Wrapper */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-28 lg:h-28 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 64px, 112px"
            className="rounded-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div className="flex flex-col items-start lg:items-center text-left lg:text-center min-w-0 flex-1 w-full">
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-white truncate w-full">
            {name}
          </h3>

          <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm mt-1">
            <span className="text-accent opacity-80">Total Sales:</span>
            <span className="text-text font-medium font-mono">{sales}</span>
          </div>
        </div>
      </div>
    </div>
  );
}