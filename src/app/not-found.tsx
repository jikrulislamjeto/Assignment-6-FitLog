import React from "react";
import Link from "next/link";
import { Dumbbell, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-28 text-center flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#171b24] border border-[#2b3140] mb-6 shadow-2xl">
        <Dumbbell className="w-10 h-10 text-[#CCFF00] rotate-45" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-[#CCFF00] mb-2">
        404 ERROR
      </span>

      <h1 className="font-oswald text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
        LOST YOUR FORM?
      </h1>

      <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
        The lift or page you are looking for does not exist or has been racked.
        Let&apos;s get you back to the library.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-black transition-all hover:bg-brand-lime-hover hover:shadow-lg hover:shadow-[#CCFF00]/20 active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Workouts</span>
      </Link>
    </div>
  );
};

export default NotFound;