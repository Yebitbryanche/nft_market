import Image from "next/image";

interface TrendingColProps {
  primary_url: string;
  secondary_1: string;
  secondary_2: string;
  artist_url: string;
  collection_name?: string;
  artist_name?: string;
  item_count?: string | number;
}

export default function TrendingCard({
  primary_url,
  secondary_1,
  secondary_2,
  artist_url,
  collection_name = "DSGN Animals",
  artist_name = "Mr Fox",
  item_count = "1025+",
}: TrendingColProps) {
  return (
    <div className="flex flex-col gap-y-4 w-full max-w-[330px] mx-auto sm:mx-0">
      {/* Images Section */}
      <div className="flex flex-col gap-y-3 sm:gap-y-4 w-full">
        {/* Main Primary Featured Image */}
        <div className="relative w-full aspect-square rounded-[20px] overflow-hidden shadow-sm">
          <Image
            src={primary_url}
            fill
            alt={collection_name}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
            className="object-cover rounded-[20px] hover:scale-95 ease-out transition-transform duration-300"
            priority
          />
        </div>

        {/* Secondary Thumbnail Row */}
        <div className="grid grid-cols-3 gap-3 w-full">
          {/* Thumbnail 1 */}
          <div className="relative w-full aspect-square rounded-[20px] overflow-hidden">
            <Image
              src={secondary_1}
              fill
              alt="Secondary Preview 1"
              sizes="100px"
              className="object-cover rounded-[20px] hover:scale-95 ease-out transition-transform duration-300"
            />
          </div>

          {/* Thumbnail 2 */}
          <div className="relative w-full aspect-square rounded-[20px] overflow-hidden">
            <Image
              src={secondary_2}
              fill
              alt="Secondary Preview 2"
              sizes="100px"
              className="object-cover rounded-[20px] hover:scale-95 ease-out transition-transform duration-300"
            />
          </div>

          {/* Item Count Pill Badge */}
          <div className="bg-primary aspect-square w-full rounded-[20px] flex items-center justify-center p-2 text-white">
            <p className="text-lg sm:text-[22px] font-semibold tracking-tight">
              {item_count}
            </p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-y-2 mt-1">
        <p className="text-xl sm:text-[22px] font-semibold leading-tight text-slate-900 dark:text-white truncate">
          {collection_name}
        </p>

        <div className="flex items-center gap-x-3">
          <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={artist_url}
              fill
              alt={artist_name}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-text truncate">
            {artist_name}
          </p>
        </div>
      </div>
    </div>
  );
}