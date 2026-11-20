"use client";

import { useState, useEffect } from "react";

interface CountDownCardProps {
  targetDate?: Date | string | number;
}

export default function CountDownCard({ targetDate }: CountDownCardProps) {
  // Default fallback target: 59 hours, 59 minutes, 59 seconds from now
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Determine the target time in milliseconds
    const endTime = targetDate
      ? new Date(targetDate).getTime()
      : Date.now() + (59 * 3600 + 59 * 60 + 59) * 1000;

    const calculateTime = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const h = Math.floor(difference / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    };

    // Calculate immediately on mount
    calculateTime();

    // Update countdown every 1 second (1000ms)
    const interval = setInterval(calculateTime, 1000);

    // Clean up timer on unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="p-[30px] bg-black/20 backdrop-blur-xs w-full max-w-[295px] h-[147px] rounded-[20px] text-white">
      <p className="text-[12px] font-mono text-white/80 mb-2">Auction ends in:</p>
      
      <div className="flex flex-row items-baseline justify-between">
        {/* Hours */}
        <div className="flex flex-col items-start">
          <p className="text-[38px] font-semibold font-mono leading-tight">
            {timeLeft.hours}
          </p>
          <p className="text-[12px] font-mono text-white/70">Hours</p>
        </div>

        <p className="text-[38px] font-semibold font-mono leading-none pb-4">:</p>

        {/* Minutes */}
        <div className="flex flex-col items-start">
          <p className="text-[38px] font-semibold font-mono leading-tight">
            {timeLeft.minutes}
          </p>
          <p className="text-[12px] font-mono text-white/70">Minutes</p>
        </div>

        <p className="text-[38px] font-semibold font-mono leading-none pb-4">:</p>

        {/* Seconds */}
        <div className="flex flex-col items-start">
          <p className="text-[38px] font-semibold font-mono leading-tight">
            {timeLeft.seconds}
          </p>
          <p className="text-[12px] font-mono text-white/70">Seconds</p>
        </div>
      </div>
    </div>
  );
}