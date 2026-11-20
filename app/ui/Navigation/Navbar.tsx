'use client';

import Button from "@/app/components/Buttons/Button";
import { MenuIcon, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleRegistration = () => {
    router.push('/auth/signup');
  };

  return (
    <nav className="flex flex-row items-center justify-between px-5 md:px-12 py-5 w-full">
      {/* Brand Logo */}
      <Link href="/" className="relative md:w-[224px] w-[182px] h-[24px]">
        <Image
          src="/Logo.svg"
          fill
          alt="Company Logo"
          priority
        />
      </Link>

      {/* Navigation Links & Action Button */}
      <div className="hidden md:flex md:flex-row md:items-center md:gap-x-4">
        <Link
          href="/marketplace"
          className="text-base font-semibold px-4 py-2 hover:text-primary active:scale-95 transition-all duration-200"
        >
          Marketplace
        </Link>

        <Link
          href="/rankings"
          className="text-base font-semibold px-4 py-2 hover:text-primary active:scale-95 transition-all duration-200"
        >
          Rankings
        </Link>

        <Link
          href="/connect-wallet"
          className="text-base font-semibold px-4 py-2 hover:text-primary active:scale-95 transition-all duration-200"
        >
          Connect a wallet
        </Link>

        {/* Action Button - Pass onClick to Button */}
        <Button 
          text="Sign Up" 
          icon={<UserRound color="white" size={20} />} 
          onClick={handleRegistration}
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden text-white cursor-pointer">
        <MenuIcon size={20} />
      </div>
    </nav>
  );
}