'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/Buttons/Button";
import JoinUs from "@/app/components/Inputs/JoinUs";

export default function Footer() {
  const SOCIAL_LINKS = [
    { name: "Discord", icon: "/DiscordLogo.svg", href: "https://discord.com" },
    { name: "Youtube", icon: "/YoutubeLogo.svg", href: "https://youtube.com" },
    { name: "Twitter", icon: "/TwitterLogo.svg", href: "https://twitter.com" },
    { name: "Instagram", icon: "/InstagramLogo.svg", href: "https://instagram.com" },
  ];

  return (
    <footer className="w-full bg-secondary text-white px-5 py-10 md:px-12 md:py-12 lg:px-28 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-12">
        {/* Top Grid: Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Marketplace Info & Socials */}
          <div className="flex flex-col gap-y-6">
            <Link href="/" className="flex items-center gap-x-3">
              <Image
                src="/Storefront.svg"
                width={32}
                height={32}
                alt="NFT Marketplace Storefront Logo"
              />
              <span className="font-mono text-xl md:text-2xl font-bold">
                NFT Marketplace
              </span>
            </Link>

            <p className="text-accent text-base max-w-xs">
              NFT marketplace UI created with Anima for Figma.
            </p>

            <div className="flex flex-col gap-y-3">
              <p className="text-accent font-medium">Join our community</p>
              <div className="flex items-center gap-x-3">
                {SOCIAL_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={item.icon}
                      width={32}
                      height={32}
                      alt={`${item.name} icon`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-y-6">
            <h3 className="font-mono text-xl md:text-2xl font-bold">Explore</h3>
            <div className="flex flex-col gap-y-3">
              <Link
                href="/marketplace"
                className="text-accent hover:text-white transition-colors text-base"
              >
                Marketplace
              </Link>
              <Link
                href="/rankings"
                className="text-accent hover:text-white transition-colors text-base"
              >
                Rankings
              </Link>
              <Link
                href="/connect-wallet"
                className="text-accent hover:text-white transition-colors text-base"
              >
                Connect a wallet
              </Link>
            </div>
          </div>

          {/* Column 3: Newsletter Digest */}
          <div className="flex flex-col gap-y-6 md:col-span-2 lg:col-span-1">
            <h3 className="font-mono text-xl md:text-2xl font-bold">
              Join our weekly digest
            </h3>
            <p className="text-accent text-base">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            {/* Newsletter Input Form */}
            <JoinUs/>
          </div>
        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="flex flex-col gap-y-4 pt-4 border-t border-accent/30 text-accent text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} NFT Market. Use this template freely.</p>
        </div>
      </div>
    </footer>
  );
}