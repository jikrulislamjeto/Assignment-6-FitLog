import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import bannerImg from "@/assets/banner.png"

const Hero = () => {
  return (
    <section className="w-full pt-6 pb-12">
      <div className="relative overflow-hidden rounded-2xl bg-[#14171e] border border-[#232731] p-8 sm:p-10 lg:p-14 shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c4f000]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c4f000] mb-3">
              WORKOUT LIBRARY
            </span>

            <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] max-w-xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#c4f000] px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-black transition-all hover:bg-[#b5de00] hover:shadow-lg hover:shadow-[#c4f000]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c4f000] active:scale-95"
            >
              <span>BROWSE WORKOUTS</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Hero Banner Visual */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-95 sm:max-w-110 aspect-[5/4] flex items-center justify-center">
              <Image
                src="/banner.png"
                alt="Gym biomechanics illustration"
                width={500}
                height={400}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;