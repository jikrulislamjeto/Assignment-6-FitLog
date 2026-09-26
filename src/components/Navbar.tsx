"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";

const Navbar = () => {
  const pathname = usePathname();
  const { totalExercises, savedPlan, isLoaded } = useWorkout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const planCount = isLoaded ? totalExercises : 0;
  const savedCount = isLoaded ? savedPlan.length : 0;

  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/exercise");
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#232731] bg-[#0f1115]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4f000] rounded-lg"
          aria-label="FitLog Home"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#192419] border border-[#293d22] group-hover:border-[#c4f000]/60 transition-colors">
            <Dumbbell className="w-5 h-5 text-[#c4f000] transition-transform group-hover:rotate-12 duration-300" />
          </div>
          <span className="font-oswald text-xl sm:text-2xl font-bold tracking-tight text-white uppercase group-hover:text-[#c4f000] transition-colors">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1.5 bg-[#14171e] p-1 rounded-full border border-[#232731]"
          aria-label="Main Navigation"
        >
          <Link
            href="/"
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              isWorkoutsActive
                ? "bg-[#192419] text-[#c4f000] shadow-sm border border-[#2c4021]"
                : "text-zinc-400 hover:text-white hover:bg-[#1b1f28]"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              isMyPlanActive
                ? "bg-[#192419] text-[#c4f000] shadow-sm border border-[#2c4021]"
                : "text-zinc-400 hover:text-white hover:bg-[#1b1f28]"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right Status Badges & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c4f000] rounded-full p-0.5"
            aria-label={`View plan with ${planCount} exercises`}
          >
            <span className="text-zinc-300 font-semibold group-hover:text-white">
              Plan
            </span>
            <span className="bg-[#c4f000] text-black font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            prefetch={true}
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition group focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-full p-0.5"
            aria-label={`View saved items with ${savedCount} exercises`}
          >
            <span className="text-zinc-400 font-medium group-hover:text-zinc-200">
              Saved
            </span>
            <span className="border border-zinc-700 bg-[#161a22] text-zinc-300 font-semibold text-[11px] min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center group-hover:border-zinc-500 transition-colors">
              {savedCount}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden ml-1 p-2 rounded-lg bg-[#161a22] border border-[#252a36] text-zinc-300 hover:text-white hover:border-zinc-500 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#232731] bg-[#12151b] px-4 py-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                isWorkoutsActive
                  ? "bg-[#192419] text-[#c4f000] border border-[#2c4021]"
                  : "text-zinc-300 hover:bg-[#1b1f28]"
              }`}
            >
              <span>Workouts</span>
              {isWorkoutsActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4f000]" />
              )}
            </Link>
            <Link
              href="/my-plan"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                isMyPlanActive
                  ? "bg-[#192419] text-[#c4f000] border border-[#2c4021]"
                  : "text-zinc-300 hover:bg-[#1b1f28]"
              }`}
            >
              <span>My Plan</span>
              <div className="flex items-center gap-2">
                <span className="bg-[#c4f000] text-black font-extrabold text-[10px] px-1.5 py-0.5 rounded-full">
                  {planCount} Plan
                </span>
                <span className="border border-zinc-700 bg-[#161a22] text-zinc-300 text-[10px] px-1.5 py-0.5 rounded-full">
                  {savedCount} Saved
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;