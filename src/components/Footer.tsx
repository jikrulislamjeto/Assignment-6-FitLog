import React from "react";
import Link from "next/link";
import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#232731] bg-[#0c0e12] py-8 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:text-[#c4f000] transition group focus:outline-none"
        >
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#192419] border border-[#293d22]">
            <Dumbbell className="w-4 h-4 text-[#c4f000] transition-transform group-hover:rotate-12" />
          </div>
          <span className="font-oswald text-lg font-bold tracking-tight uppercase">
            FITLOG
          </span>
        </Link>
        <p className="text-xs text-zinc-400 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;