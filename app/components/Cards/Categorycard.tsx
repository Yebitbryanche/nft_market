"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface CategoryCardProps {
  bg_image?: string;
  icon_url?: string;
  category?: string;
}

export default function CategoryCard({
  bg_image = "/category1.png",
  icon_url = "/Paintbrush.svg",
  category = "Art",
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group w-full rounded-[20px] overflow-hidden bg-secondary text-white shadow-md hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-300"
    >
      {/* Background Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={bg_image}
          alt={`${category} category background`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Animated Glassmorphism Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
          initial={false}
          whileHover={{ backgroundColor: "rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Icon */}
          <motion.div
            className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 12,
              },
            }}
          >
            <Image
              src={icon_url}
              fill
              className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
              alt={`${category} category icon`}
            />
          </motion.div>
        </motion.div>

        {/* Subtle Animated Shine */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[450%]" />
        </div>
      </div>

      {/* Category Name */}
      <div className="relative overflow-hidden p-3 sm:p-4 text-left bg-secondary">
        <motion.p
          className="font-semibold text-base sm:text-lg md:text-xl truncate text-white"
          initial={false}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.25 }}
        >
          {category}
        </motion.p>

        {/* Accent underline */}
        <div className="mt-2 h-[2px] w-0 rounded-full bg-primary transition-all duration-500 ease-out group-hover:w-full" />
      </div>
    </motion.div>
  );
}